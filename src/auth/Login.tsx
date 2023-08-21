import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

import { poolData } from '../config/cognito-cfg';

type Inputs = {
  email: string;
  password: string;
};

export function loginCognito(data: Inputs) {
  const userPool = new CognitoUserPool(poolData);
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: data.email,
      Password: data.password
    });

    const cognitoUser = new CognitoUser({
      Username: data.email,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result);
        console.log(result);
      },
      onFailure: (err) => {
        reject(err);
      }
    });
  });
}
