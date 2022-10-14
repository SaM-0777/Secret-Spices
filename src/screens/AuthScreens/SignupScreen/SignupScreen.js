import React, { useState, useEffect } from 'react';
import { StatusBar, View, ToastAndroid, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { GettingStartedHeader, EmailInput, UsernameInput, PasswordInput, PrimaryButton } from '../../../components';

import { signUp } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const SignupScreen = ({ navigation }) => {
  const [isFormValid, setIsFormValid] = useState({ isEmailValid: false, isUsernameValid: false, isPasswordValid: false })
  const [signUpAttributes, setSignupAttributes] = useState({
    email: "",
    username: "",
    password: "",
  })

  // handle when sign up attributes are changed
  const handleSignupAttributesChange = (target, value) => setSignupAttributes({ ...signUpAttributes, [target]: value })
  
  // sign up successful function
  const successfulCallBack = () => {
    navigation.navigate('email-verification', { params: {username: signUpAttributes.username} })
  }

  const failureCallBack = (message) => {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
    console.log(message)
  }

  // handle when next button is clicked
  const handleNext = () => {
    signUp(signUpAttributes, successfulCallBack, failureCallBack)
    // navigation.push('email-verification')
  }

  return (
    <View style={Styles.container} >
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-180} >
        <View style={[Styles.wrapper]} >
          <GettingStartedHeader />
          <EmailInput handleSignupAttributesChange={handleSignupAttributesChange} setIsFormValid={setIsFormValid} />
          {/*<UsernameInput handleSignupAttributesChange={handleSignupAttributesChange} setIsFormValid={setIsFormValid} />*/}
          <PasswordInput handleSignupAttributesChange={handleSignupAttributesChange} setIsFormValid={setIsFormValid} />
          <View style={[Styles.footerWrapper, {  }]} >
            <PrimaryButton label={'Next'} disabled={!(isFormValid.isEmailValid && isFormValid.isPasswordValid)} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
};


export default SignupScreen;

