import React, { useEffect, useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null)

  const getUser = async () => {
    try {
      const response = await AsyncStorage.getItem('@user')
      // const user = JSON.stringify(response)
      setUser(response)
      // console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const onLogout = () => {
    console.log('signin out!')
    Auth.signOut()
    // navigation.navigate('auth-navigator', { screen: 'get-started'})
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <Text>Home Screen</Text>
      {/*<Text>{user}</Text>*/}
      <TouchableOpacity onPress={onLogout} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
};


export default HomeScreen;

