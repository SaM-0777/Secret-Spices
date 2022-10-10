import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import { userData } from '../../../utils/auth/auth';

import Styles from './Styles';


const HomeScreen = ({  }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => Auth.signOut()} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
};


export default HomeScreen;

