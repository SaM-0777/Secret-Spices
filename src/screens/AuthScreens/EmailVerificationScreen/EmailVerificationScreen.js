import React, { useState } from 'react';
import { View, TextInput, StatusBar, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BackButton, TextBox, PrimaryButton } from '../../../components';

import { confirmSignUp, resendConfirmationCode, listenToAutoSignInEvent } from '../../../utils/auth/auth';

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const EmailVerificationScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(true)
  const [email, setEmail] = useState(route?.params?.email)
  const [code, setCode] = useState('')

  const navigateBack = () => navigation.goBack()

  const resendOTPCallBack = (message) => ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  const handleResendOTP = async () => await resendConfirmationCode(email, resendOTPCallBack)

  const listenToHubFailureCallback = (message) => {
    // restrict user to go back
    setLoading(false)
    navigation.reset({ index: 0, routes: [{ name: 'login' }] })
    ToastAndroid.show(message, ToastAndroid.CENTER)
  }
  const listenToHubSuccessCallback = async (user) => {
    // restrict user to go back
    try {
      // console.log(user)
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      // navigation.reset({ index: 0, routes: [{ name: 'app-navigator', params: {screen: 'home'} }] })
    } catch (error) {
      ToastAndroid.show('An error occured', ToastAndroid.CENTER)
    }
  }

  const confirmSignUpFailureCallback = (message) => {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  const confirmSignUpSuccessCallback = async () => {
    await listenToAutoSignInEvent(listenToHubSuccessCallback, listenToHubFailureCallback)
    setLoading(false)
  }

  const handleNext = async () => {
    setLoading(true)
    await confirmSignUp(email, code, confirmSignUpSuccessCallback, confirmSignUpFailureCallback)
    setLoading(false)
    // on success navigate to app stack (home screen)
    // on failure toast error message
    console.log(code)
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={Styles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
        </>
        :
        null
      }
      <View style={Styles.wrapper} >
        <BackButton onPress={navigateBack} />
        <View style={Styles.contentWrapper} >
          <View style={Styles.textBoxContainer} >
            <TextBox email={email} />
          </View>
          <TextInput editable={!loading} onChangeText={(text) => setCode(text)} secureTextEntry onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} maxLength={6} cursorColor={AppStyles.secondaryColor} style={[Styles.textInput, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} />
          <View style={Styles.resendCodeContainer} >
            <Text style={Styles.resendCodeInfo} >Didn't receive a code? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleResendOTP} ><Text style={Styles.resendCode} >Resend code</Text></TouchableOpacity>
          </View>
          <View style={Styles.primaryButtonContainer} >
            <PrimaryButton disabled={!(code)} label={'Next'} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </View>
    </View>
  )
};


export default EmailVerificationScreen;

