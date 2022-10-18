import React, { useState, useEffect } from 'react';
import { StatusBar, View, ToastAndroid, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Header, EmailInput, BackButton, PasswordInput, PrimaryButton } from '../../../components';

import { signUp } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const SignupScreen = ({ navigation }) => {
  const[loading, setLoading] = useState(false)
  const [isFormValid, setIsFormValid] = useState({ isEmailValid: false, isUsernameValid: false, isPasswordValid: false })
  const [signUpAttributes, setSignupAttributes] = useState({
    email: "",
    username: "",
    password: "",
  })

  const navigateBack = () => navigation.goBack()

  // handle when sign up attributes are changed
  const handleSignupAttributesChange = (target, value) => setSignupAttributes({ ...signUpAttributes, [target]: value })
  
  // sign up successful function
  const successfulCallBack = () => {
    setLoading(false)
    navigation.navigate('email-verification', { email: signUpAttributes.email })
  }
  
  const failureCallBack = (message) => {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
    // console.log(message)
  }
  
  // handle when next button is clicked
  const handleNext = async () => {
    setLoading(true)
    await signUp(signUpAttributes, successfulCallBack, failureCallBack)
    setLoading(false)
  }

  return (
    <View style={Styles.container} >
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={Styles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
        </>
        :
        null
      }
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-180} >
        <View style={[Styles.backButtonContainer, { paddingTop: StatusBar.currentHeight }]} >
          <BackButton onPress={navigateBack} />
        </View>
        <View style={[Styles.wrapper]} >
          <Header header={"Getting Started!"} subHeader={"Look like you are new to us! Create an account for an complete experience."} />
          <EmailInput handleSignupAttributesChange={handleSignupAttributesChange} setIsFormValid={setIsFormValid} editable={!loading} />
          <PasswordInput handleSignupAttributesChange={handleSignupAttributesChange} setIsFormValid={setIsFormValid} editable={!loading} />
          <View style={[Styles.footerWrapper, {  }]} >
            <PrimaryButton label={'Next'} disabled={!(isFormValid.isEmailValid && isFormValid.isPasswordValid)} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
};


export default SignupScreen;

