import {
  CognitoUserPool,
  CognitoUserAttribute
  // CognitoUser,
} from 'amazon-cognito-identity-js';

import { poolData } from '../config/cognito-cfg';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function registerCognito(data: Inputs) {
  console.log(data);
  const userPool = new CognitoUserPool(poolData);

  const attributeList: CognitoUserAttribute[] = [];

  const dataName = {
    Name: 'name',
    Value: data.name
  };

  const attributeName = new CognitoUserAttribute(dataName);

  attributeList.push(attributeName);

  return new Promise((resolve, reject) => {
    userPool.signUp(
      data.email,
      data.password,
      attributeList,
      attributeList,
      function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result?.user);
      }
    );
  });
}
