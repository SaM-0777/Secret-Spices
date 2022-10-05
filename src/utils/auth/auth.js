import React, { useState } from 'react';
import { Auth } from 'aws-amplify';


export const continueWithGoogle = () => {
    Auth.federatedSignIn({ provider: 'Google' })
}

export const continueWithFacebook = () => {
    Auth.federatedSignIn({ provider: 'Facebook' })
}

