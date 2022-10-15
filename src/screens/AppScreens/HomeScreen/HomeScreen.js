import React, { useEffect, useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import Styles from './Styles';


const HomeScreen = ({ navigation }) => {

  const onLogout = () => {
    console.log('signin out!')
    Auth.signOut()
    navigation.navigate('auth-navigator', { screen: 'get-started'})
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={onLogout} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
};


export default HomeScreen;

