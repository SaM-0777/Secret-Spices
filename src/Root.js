import React, { useState, useEffect } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userData } from './utils/auth/auth';

import { AuthStack, AppStack } from './Navigations';
import { OnBoardingScreen } from './screens';
import { PrimaryLoading } from './components';


const Root = ({ }) => {
  const [loading, setLoading] = useState(true)
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false)
  const [setUserData, getUserData] = userData()

  const checkOnboardingViewed = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding')
      // console.log('value: ', value)
      if (value !== null) setViewedOnBoarding(true)
    } catch (error) {
      console.error('error checking async-storage for key @viewedOnBoarding', error)
    } finally {
      //console.log('loading set to false')
      setLoading(false)
    }
  }

  useEffect(() => {
    // console.log('first execution')
    checkOnboardingViewed()
    return () => {

    };
  }, []);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUserData(userData));
          break;
        case 'signOut':
          setUserData(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUserData(userData));

    console.log(getUserData())
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }


  return (
    <>
      {loading ? <PrimaryLoading /> : viewedOnBoarding ? getUserData() ? <AppStack /> : <AuthStack /> : <OnBoardingScreen setViewedOnBoarding={setViewedOnBoarding} />}
    </>
  )
};


export default Root;

