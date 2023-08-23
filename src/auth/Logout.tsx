import { CognitoUserPool } from 'amazon-cognito-identity-js';

import { poolData } from '../config/cognito-cfg';

export function logoutCognito() {
  const userPool = new CognitoUserPool(poolData);
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
}
