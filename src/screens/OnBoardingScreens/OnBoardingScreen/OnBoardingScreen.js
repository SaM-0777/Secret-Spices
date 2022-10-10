import React from 'react';
import { View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { OnBoarding, PrimaryButton } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../../AppStyles';


const OnBoardingScreen = ({ setLoading, setViewedOnBoarding }) => {
  const onPrimaryButtonPress = async () => {
    setLoading(true)
    try {
      await AsyncStorage.setItem('@viewedOnBoarding', 'true')
      setViewedOnBoarding(await AsyncStorage.getItem('@viewedOnBoarding'))
      console.log(await AsyncStorage.getItem('@viewedOnBoarding'))
      console.log('done')
    } catch (error) {
      console.error('error reading async-storage for key @viewedOnBoarding', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <View style={Styles.wrapper} >
        <OnBoarding />
      </View>
      <View style={Styles.footerWrapper} >
        <PrimaryButton label={'Get Started'} onPress={onPrimaryButtonPress} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
      </View>
    </View>
  )
};


export default OnBoardingScreen;

