/* eslint-disable */

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from '../../components';
import { HomeScreen } from '../../screens';


const AppNavigationStack = createNativeStackNavigator();

const AppStack = ({ }) => {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })

  return (
    <AppNavigationStack.Navigator screenOptions={screenOptions} >
      <AppNavigationStack.Screen name={'home'} component={HomeScreen} />
    </AppNavigationStack.Navigator>
  )
};


export default AppStack;

