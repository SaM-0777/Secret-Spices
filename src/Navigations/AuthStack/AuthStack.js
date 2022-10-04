import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStarted, SignupScreen, LoginScreen, EmailVerificationScreen } from '../../screens/AuthScreens';


const AuthNavigationStack = createNativeStackNavigator();

const AuthStack = () => {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })

  return (
    <AuthNavigationStack.Navigator screenOptions={screenOptions} id={'auth-navigator'} >
      <AuthNavigationStack.Screen name={'get-started'} component={GetStarted} />
      <AuthNavigationStack.Screen name={'signup'} component={SignupScreen} />
      <AuthNavigationStack.Screen name={'login'} component={LoginScreen} />
      <AuthNavigationStack.Screen name={'email-verification'} component={EmailVerificationScreen} />
    </AuthNavigationStack.Navigator>
  )
};

const styles = StyleSheet.create({});

export default AuthStack;
