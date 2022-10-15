import { Auth, Hub } from 'aws-amplify';

export const continueWithGoogle = () => {
    Auth.federatedSignIn({ provider: 'Google' })
};

export const continueWithFacebook = () => {
    Auth.federatedSignIn({ provider: 'Facebook' })
};

export const signUp = async (signUpAttributes, successfulCallBack, callBack) => {
    const { email, username, password } = signUpAttributes
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
        callBack(error.message)
    }
};


export const listenToAutoSignInEvent = async (successCallBack, failureCallBack) => {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload
        if (event === 'autoSignIn') {
            const user = payload.data
            // assign user
            successCallBack(user)
        } else if (event === 'autoSignIn_failure') {
            // redirect to sign in page
            failureCallBack('Signin to continue')
        }
    })
};


export const confirmSignUp = async (username, code, successCallBack, failureCallBack) => {
    try {
        await Auth.confirmSignUp(username, code)
        successCallBack()
    } catch (error) {
        console.log('error confirming sign up', error)
        failureCallBack(error.message)
    }
};


export const resendConfirmationCode = async (username, callBack) => {
    try {
        await Auth.resendSignUp(username)
        callBack('Code resent successfully')
        // console.log('code resent successfully')
    } catch (error) {
        console.log('error resending code: ', error)
        callBack(error.message)
    }
};

