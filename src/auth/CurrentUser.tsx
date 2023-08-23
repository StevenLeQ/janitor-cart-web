import { CognitoUserPool, CognitoUserSession } from 'amazon-cognito-identity-js';

import { poolData } from '../config/cognito-cfg';

type UserSession = {
  accessToken: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
};

type UserData = {
  [key: string]: string;
};

type GetUserResponse = {
  session: UserSession | null;
  userData: UserData | null;
};

export function GetUserCognito(): Promise<GetUserResponse> {
  const userPool = new CognitoUserPool(poolData);
  return new Promise<GetUserResponse>((resolve, reject) => {
    const cognitoUser = userPool.getCurrentUser();

    if (!cognitoUser) {
      resolve({ session: null, userData: null });
      return;
    }

    cognitoUser.getSession((err: unknown, session: CognitoUserSession) => {
      if (err) {
        reject(err);
        return;
      }

      cognitoUser.getUserAttributes((err, attributes) => {
        if (err) {
          reject(err);
          return;
        }

        const userData = attributes?.reduce((acc, attribute) => {
          acc[attribute.Name] = attribute.Value;
          return acc;
        }, {} as UserData);

        resolve({
          session: session
            ? {
                accessToken: session.getAccessToken().getJwtToken(),
                idToken: session.getIdToken().getJwtToken(),
                refreshToken: session.getRefreshToken().getToken(),
                expiresIn: session.getAccessToken().getExpiration() - Math.floor(Date.now() / 1000)
              }
            : null,
          userData: userData || null
        });
      });
    });
  });
}
