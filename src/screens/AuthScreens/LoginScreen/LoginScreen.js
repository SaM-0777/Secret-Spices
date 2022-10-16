import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LoginEmailInput, LoginPasswordInput, BackButton, PrimaryButton } from '../../../components';

import { signIn } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [signInAttributes, setSignInAttributes] = useState({
    email: "",
    password: "",
  })

  const navigateBack = () => navigation.goBack()
  const handleSignInAttributes = (target, value) => setSignInAttributes({...signInAttributes, [target]: value})

  const signinFailureCallback = (message) => {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  const signinSuccessCallback = async (user) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      setLoading(false)
      navigation.reset({ index: 0, routes: [{ name: 'app-navigator', params: { screen: 'home' } }] })
    } catch (error) {
      setLoading(false)
      ToastAndroid.show('An error occured', ToastAndroid.CENTER)
    }
    setLoading(false)
  }

  const handleNext = async () => {
    setLoading(true)
    await signIn(signInAttributes, signinSuccessCallback, signinFailureCallback)
    setLoading(false)
  }

  return(
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
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-350} >
        <View style={Styles.backButtonContainer} >
          <BackButton onPress={navigateBack} />
        </View>
        <View style={Styles.wrapper} >
          <LoginEmailInput editable={!loading} handleSignInAttributes={handleSignInAttributes} />
          <LoginPasswordInput editable={!loading} handleSignInAttributes={handleSignInAttributes} />
          <View style={[Styles.footerWrapper, {}]} >
            <PrimaryButton label={'Next'} disabled={!(signInAttributes.email && signInAttributes.password)} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
};


export default LoginScreen;

