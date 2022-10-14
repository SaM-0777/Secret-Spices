import React from 'react';
import { View, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

import { continueWithFacebook, continueWithGoogle } from '../../../utils/auth/auth';
import { GetStartedHeader, Divider, SocialLoginButton, PrimaryButton } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const GetStarted = ({ navigation }) => {
  const onGetStarted = () => {
    navigation.push('signup')
  }

  const onLogin = () => {
    navigation.push('login')
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <GetStartedHeader />
        <View style={Styles.getStartedButtonWrapper} >
          <PrimaryButton label={'Get Started'} onPress={onGetStarted} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
        </View>
        <Divider />
        <SocialLoginButton onPress={continueWithGoogle} label={'Continue with Google'} icon={'logo-google'} iconColor={'#000'} textColor={AppStyles.primaryTextColor} backgroundColor={'#FFF'} />
        <View style={{ marginTop: 10, }} >
          <SocialLoginButton onPress={continueWithFacebook} label={'Continue with Facebook'} icon={'logo-facebook'} iconColor={'#FFF'} textColor={'#FFF'} backgroundColor={'#1877F2'} />
        </View>
      </View>
      <Button mode={'text'} onPress={onLogin} textColor={AppStyles.primaryTextColor} labelStyle={Styles.loginButtonText} style={Styles.loginButton} >Login</Button>
    </View>
  )
};


export default GetStarted;

