import { Auth } from 'aws-amplify';

export const continueWithGoogle = () => {
    Auth.federatedSignIn({ provider: 'Google' })
};

export const continueWithFacebook = () => {
    Auth.federatedSignIn({ provider: 'Facebook' })
};

export const signUp = async (signUpAttributes, successfulCallBack, failureCallBack) => {
    const {email, username, password} = signUpAttributes
    console.log(username, password, email)
    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            /*attributes: {
                email,       // optional
                preferred_username: username,
                // phone_number,   // optional - E.164 number convention
                // other custom attributes 
            },*/
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        })
        console.log(user)
        successfulCallBack()
    } catch (error) {
        console.log('error signing up:', error)
        failureCallBack(error.message)
    }
}

