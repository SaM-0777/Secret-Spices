import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';


const RootNavigationStack = createNativeStackNavigator();

const RootNavigation = ({ }) => {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })

  return (
    <RootNavigationStack.Navigator screenOptions={screenOptions} >
      <RootNavigationStack.Screen name={'auth-stack'} component={AuthStack} />
      <RootNavigationStack.Screen name={'app-stack'} component={AppStack} />
    </RootNavigationStack.Navigator>
  )
};


export default RootNavigation;

