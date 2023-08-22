import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

import { poolData } from '../config/cognito-cfg';

type Inputs = {
  email: string;
  code: string;
};

export function confirmEmailCognito(data: Inputs) {
  const userPool = new CognitoUserPool(poolData);
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: data.email,
      Pool: userPool
    });

    cognitoUser.confirmRegistration(data.code, true, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export function resendEmailCognito(email: string) {
  const userPool = new CognitoUserPool(poolData);
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.resendConfirmationCode((err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
