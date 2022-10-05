import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens';

const AppNavigationStack = createNativeStackNavigator();

const AppStack = ({  }) => {
  return (
    <AppNavigationStack.Navigator>
      <AppNavigationStack.Screen name={'home'} component={HomeScreen} />
    </AppNavigationStack.Navigator>
  )
};


export default AppStack;

