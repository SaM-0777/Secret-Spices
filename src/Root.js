import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStack, AppStack } from './Navigations';
import { OnBoardingScreen, BootLoadingScreen } from './screens';


const RootNavigationStack = createNativeStackNavigator();

const Root = ({ }) => {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })
  
  return (
    <RootNavigationStack.Navigator screenOptions={screenOptions} id={'root-navigator'} initialRouteName={'boot-loading'}  >
      <RootNavigationStack.Screen name={'boot-loading'} component={BootLoadingScreen} />
      <RootNavigationStack.Screen name={'onboarding-screen'} component={OnBoardingScreen} />
      <RootNavigationStack.Screen name={'auth-navigator'} component={AuthStack} />
      <RootNavigationStack.Screen name={'app-navigator'} component={AppStack} />
    </RootNavigationStack.Navigator>
  )
};


export default Root;

