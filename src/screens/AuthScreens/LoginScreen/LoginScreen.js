import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LoginEmailInput, LoginPasswordInput, PrimaryButton } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)

  const handleNext = () => {

  }

  return(
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={Styles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
        </>
        :
        null
      }
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-350} >
        <View style={Styles.wrapper} >
          <LoginEmailInput />
          <LoginPasswordInput />
          <View style={[Styles.footerWrapper, {}]} >
            <PrimaryButton label={'Next'} disabled={false} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
};


export default LoginScreen;

