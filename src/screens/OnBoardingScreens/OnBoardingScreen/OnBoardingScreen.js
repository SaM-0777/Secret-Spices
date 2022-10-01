import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { OnBoarding, PrimaryButton } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../../AppStyles';


const OnBoardingScreen = ({  }) => {
  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <OnBoarding />
      </View>
      <View style={Styles.footerWrapper} >
        <PrimaryButton label={'Get Started'} onPress={() => console.log('Pressed')} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
      </View>
    </View>
  )
};


export default OnBoardingScreen;

