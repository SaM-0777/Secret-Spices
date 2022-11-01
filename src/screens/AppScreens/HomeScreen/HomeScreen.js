import React, { useEffect, useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar } from '../../../components';

import Styles from './Styles';


const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <HomeScreenHeader />
        <SearchBar />
        <MenuTypeScrollBar />
      </View>
    </SafeAreaView>
  )
};


export default HomeScreen;

