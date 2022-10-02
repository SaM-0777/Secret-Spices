import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { Header, Divider, SocialLoginButton, PrimaryButton } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../../AppStyles';


const GetStarted = ({ navigation }) => {
  const onGetStarted = () => {

  }

  const continueWithFacebook = () => {
    
  }

  const continueWithGoogle = () => {

  }

  const onLogin = () => {
    console.log('login')
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <Header />
        <View style={Styles.getStartedButtonWrapper} >
          <PrimaryButton label={'Get Started'} onPress={onGetStarted} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
        </View>
        <Divider />
        <SocialLoginButton onPress={continueWithFacebook} label={'Continue with Facebook'} icon={'logo-facebook'} />
        <View style={{ marginTop: 10, }} >
          <SocialLoginButton onPress={continueWithGoogle} label={'Continue with Google'} icon={'logo-google'} />
        </View>
      </View>
      <Button mode={'text'} onPress={onLogin} textColor={AppStyles.primaryTextColor} labelStyle={Styles.signUpButtonText} >Login</Button>
    </View>
  )
};


export default GetStarted;

