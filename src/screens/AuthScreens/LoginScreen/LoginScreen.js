import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { signIn } from '../../../utils/auth/auth';

import { Header, LoginEmailInput, LoginPasswordInput, BackButton, PrimaryButton } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function LoginScreen ({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [signInAttributes, setSignInAttributes] = useState({
    email: "",
    password: "",
  })

  function navigateBack() { navigation.goBack() }
  function handleSignInAttributes(target, value) { setSignInAttributes({ ...signInAttributes, [target]: value }) }

  function signinFailureCallback (message) {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  async function signinSuccessCallback (user) {
    /*try {
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      // navigation.reset({ index: 0, routes: [{ name: 'app-navigator', params: { screen: 'home' } }] })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      ToastAndroid.show('An error occured', ToastAndroid.CENTER)
    }*/
    // setLoading(false)
  }

  const handleTroubleSigningIn = () => navigation.navigate('forgot-password-username')

  const handleNext = async () => {
    setLoading(true)
    await signIn(signInAttributes, signinSuccessCallback, signinFailureCallback)
    // setLoading(false)
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
          <Header header={"Welcome"} subHeader={"Sign in to explore the world of food."} />
          <LoginEmailInput editable={!loading} handleSignInAttributes={handleSignInAttributes} />
          <LoginPasswordInput editable={!loading} handleSignInAttributes={handleSignInAttributes} />
          <TouchableOpacity activeOpacity={0.8} onPress={handleTroubleSigningIn} style={Styles.forgotPasswordContainer} >
            <Text variant={'bodyMedium'} style={Styles.forgotPasswordText} >Trouble signing in?</Text>
          </TouchableOpacity>
          <View style={[Styles.footerWrapper, {}]} >
            <PrimaryButton label={'Next'} disabled={!(signInAttributes.email && signInAttributes.password)} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
};


export default LoginScreen;

