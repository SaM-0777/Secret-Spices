import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, ActivityIndicator, StyleSheet, Text, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RootNavigation from './Navigations/RootNavigation';
import { OnBoardingScreen, } from './screens';

import AppStyles from './AppStyles';


const Root = ({ }) => {
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false)
  const [loading, setLoading] = useState(true)

  // check whether user has already viewed on-boarding screen 
  const checkOnboardingViewed = async () => {
    setLoading(true)
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding')
      
      if (value !== null) setViewedOnBoarding(true)
      else setViewedOnBoarding(false)
      
      setLoading(false)
      
    } catch (error) {
      console.error('error checking async-storage for key @viewedOnBoarding', error)
      setLoading(false)
      ToastAndroid.show(error.message, ToastAndroid.LONG, ToastAndroid.CENTER)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    checkOnboardingViewed()
    return () => {}
  }, [])
  
  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <View style={Styles.container} >
          <View style={Styles.loadingOverlay} />
          {/*<Text>from Root</Text>*/}
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
        </View>
        :
        viewedOnBoarding ? <RootNavigation /> : <OnBoardingScreen setViewedOnBoarding={setViewedOnBoarding} />
      }
    </>
  )
};


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: AppStyles.secondaryBackgroundColor,
  },
});


export default Root;

