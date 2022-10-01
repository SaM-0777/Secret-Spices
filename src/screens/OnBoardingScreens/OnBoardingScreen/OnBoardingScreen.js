import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { OnBoarding } from '../../../components';

import Styles from './Styles';


const OnBoardingScreen = ({  }) => {
  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <OnBoarding />
      </View>
      <View style={Styles} >

      </View>
    </View>
  )
};


export default OnBoardingScreen;

