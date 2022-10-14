import React, { useState } from 'react';
import { View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { EmailVerificationHeader, TextBox, PrimaryButton } from '../../../components';

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const EmailVerificationScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(true)
  const [code, setCode] = useState('')

  const navigateBack = () => navigation.goBack()

  const handleResendOTP = () => {

  }

  const handleNext = () => {
    // on success navigate to app stack (home screen)
    // on failure toast error message
    console.log(code)
  }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <EmailVerificationHeader onPress={navigateBack} />
        <View style={Styles.contentWrapper} >
          <View style={Styles.textBoxContainer} >
            <TextBox />
          </View>
          <TextInput onChangeText={(text) => setCode(text)} secureTextEntry onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} cursorColor={AppStyles.secondaryColor} style={[Styles.textInput, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} />
          <View style={Styles.resendCodeContainer} >
            <Text style={Styles.resendCodeInfo} >Didn't receive a code? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleResendOTP} ><Text style={Styles.resendCode} >Resend code</Text></TouchableOpacity>
          </View>
          <View style={Styles.primaryButtonContainer} >
            <PrimaryButton disabled={false} label={'Next'} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </View>
    </View>
  )
};


export default EmailVerificationScreen;

