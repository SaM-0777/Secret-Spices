import React, { useState } from 'react';
import { StatusBar, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import { GettingStartedHeader, PrimaryInput, NormalInput, PasswordInput, PrimaryButton } from '../../../components';

import AppStyles from '../../../../AppStyles';
import Styles from './Styles';

const primaryInputType = {
  Email: {
    type: "Email",
    infoText: "You'll need to verify that you own this email account.",
    placeholder: "Email",
    icon: "call",
    iconText: "Use phone instead",
  },
  Phone: {
    type: "Phone",
    infoText: "You'll need to verify that you own this phone number. Be sure to include your country code.",
    placeholder: "Phone",
    icon: "mail-outline",
    iconText: "Use email instead",
  },
}

const SignupScreen = ({ navigation }) => {
  const [primaryInput, setPrimaryInput] = useState(primaryInputType.Email)
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const togglePrimaryInput = () => {
    if (primaryInput === primaryInputType.Email) setPrimaryInput(primaryInputType.Phone)
    else setPrimaryInput(primaryInputType.Email)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevState => !prevState)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, }}  >
      <View style={Styles.container} >
        <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
        <View style={Styles.wrapper} >
          <GettingStartedHeader />
          <PrimaryInput {...primaryInput} onPress={togglePrimaryInput} />
          <NormalInput placeholder={'Username'} />
          <PasswordInput passwordVisibility={passwordVisibility} onPress={togglePasswordVisibility} />
        </View>
        <View style={Styles.footerWrapper} >
          <PrimaryButton label={'Next'} onPress={() => { }} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
};


export default SignupScreen;

