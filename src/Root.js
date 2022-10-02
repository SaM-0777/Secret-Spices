import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthStack } from './Navigations';

import { OnBoardingScreen } from './screens';
import { PrimaryLoading } from './components';


const Root = ({ }) => {
  const [loading, setLoading] = useState(true)
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false)

  const checkOnboardingViewed = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding')
      console.log('value: ', value)
      if (value !== null) setViewedOnBoarding(true)
    } catch (error) {
      console.error('error checking async-storage for key @viewedOnBoarding', error)
    } finally {
      console.log('loading set to false')
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('first execution')
    checkOnboardingViewed()
    return () => {

    };
  }, []);

  return (
    <>
      {loading ? <PrimaryLoading /> : viewedOnBoarding ? <AuthStack /> : <OnBoardingScreen setViewedOnBoarding={setViewedOnBoarding} />}
    </>
  )
};


export default Root;

