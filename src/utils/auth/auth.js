import React, { useState } from 'react';
import { Auth } from 'aws-amplify';


export const userData = () => {
    const [user, setUser] = useState(null)  
    
    const setUserData = (user) => setUser(user || null)
    const getUserData = () => user || null

    return [setUserData, getUserData]
};

export const continueWithGoogle = () => {
    Auth.federatedSignIn({ provider: 'Google' })
};

export const continueWithFacebook = () => {
    Auth.federatedSignIn({ provider: 'Facebook' })
};

