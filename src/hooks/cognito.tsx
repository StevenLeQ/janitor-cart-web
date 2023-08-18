import {
	CognitoUserPool,
	CognitoUserAttribute,
	// CognitoUser,
} from 'amazon-cognito-identity-js';    

import { poolData } from '../config/cognito-cfg';

type Inputs = {
    name: string
    email: string
    password: string
    confirm_password: string
  }

export function RegisterCognito(data: Inputs) {
    console.log(data)
    const userPool = new CognitoUserPool(poolData);
    
    const attributeList = [];
    
    const dataName = {
        Name: 'name',
        Value: data.name,
    };

    
    const attributeName = new CognitoUserAttribute(dataName);
    
    attributeList.push(attributeName);
    
    userPool.signUp(data.email, data.password, attributeList, attributeList, function(
        err,
        result
    ) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        const cognitoUser = result?.user;
        console.log('user name is ' + cognitoUser?.getUsername());
    });
}