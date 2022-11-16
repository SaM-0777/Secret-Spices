import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

import { continueWithFacebook, continueWithGoogle } from '../../../utils/auth/auth';
import { Header, Divider, SocialLoginButton, PrimaryButton, CustomLoading } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


function GetStarted({ navigation }) {
  const [loading, setLoading] = useState(false)

  function onGetStarted () {
    navigation.navigate('signup')
  }

  function onLogin () {
    navigation.navigate('login')
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      {loading ? <CustomLoading />
        :
        <>
          <View style={Styles.wrapper} >
            <Header header={"Let's Get Started"} subHeader={"Sign up or login into to have a full digital experience in our restaurant."} />
            <View style={Styles.getStartedButtonWrapper} >
              <PrimaryButton label={'Get Started'} onPress={onGetStarted} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
            </View>
            <Divider />
            <SocialLoginButton onPress={continueWithGoogle} label={'Continue with Google'} icon={'logo-google'} iconColor={'#000'} textColor={AppStyles.primaryTextColor} backgroundColor={'#FFF'} />
            <View style={{ marginTop: 10, }} >
              <SocialLoginButton onPress={continueWithFacebook} label={'Continue with Facebook'} icon={'logo-facebook'} iconColor={'#FFF'} textColor={'#FFF'} backgroundColor={'#1877F2'} />
            </View>
          </View>
          <Button mode={'text'} onPress={onLogin} textColor={AppStyles.primaryTextColor} labelStyle={Styles.loginButtonText} style={Styles.loginButton} >Already have an account? Login</Button>
        </>
      }
    </View>
  )
};


export default GetStarted;

