import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppStyles from '../../AppStyles';
import Styles from './Styles';


// boot loading animation screen
const BootLoadingScreen = ({ navigation }) => {
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false)
  const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)

  // check whether user has already viewed on-boarding screen 
  const checkOnboardingViewed = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding')

      if (value !== null) setViewedOnBoarding(true)
      else setViewedOnBoarding(false)

    } catch (error) {
      console.error('error checking async-storage for key @viewedOnBoarding', error)
    } finally {
      console.log('fresh value Here: ', viewedOnBoarding)
    }
  }

  // get user
  async function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch((error) => console.log('Not signed in: ', error))
  }

  // get latest user from auth
  async function getAuthState() {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break
        case 'signOut':
          setUser(null);
          break
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data)
          break
      }
    })

    getUser().then(userData => setUser(userData))

    try {
      const jsonUserValues = JSON.stringify(user)
      await AsyncStorage.setItem('@user', jsonUserValues)
    } catch (error) {
      console.log('Error storing @user: ', error)
    }
  }

  const buffer = async () => {
    await checkOnboardingViewed()
    await getAuthState()

    if (viewedOnBoarding === true) {
      // user has been subscribed
      if (user !== null) navigation.reset({ index: 0, routes: [{ name: 'app-navigator' }] })   // reset navigation to appstack-home
      else navigation.reset({ index: 0, routes: [{ name: 'auth-navigator' }] })                 // reset navigation to authstack-getStarted
    }
    else navigation.reset({ index: 0, routes: [{ name: 'onboarding-screen' }] })
  }

  useEffect(() => {
    buffer()

    return () => { }
  }, [user, viewedOnBoarding])


  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={Styles.loadingOverlay} />
      <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
    </View>
  )
};


export default BootLoadingScreen;

