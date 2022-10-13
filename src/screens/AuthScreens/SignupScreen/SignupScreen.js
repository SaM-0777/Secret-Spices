import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, View, ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { GettingStartedHeader, PrimaryInput, NormalInput, PasswordInput, PrimaryButton, BottomActionSheet } from '../../../components';

import formValidator from '../../../utils/formValidator/formValidator';

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
    icon: "mail",
    iconText: "Use email instead",
  },
}

const SignupScreen = ({ navigation }) => {
  const [primaryInput, setPrimaryInput] = useState(primaryInputType.Email)
  const [isFormValid, setIsFormValid] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPhone, setSignUpPhone] = useState("")
  const [signUpAttributes, setSignupAttributes] = useState({
    username: "",
    password: "",
  })
  // bottom action sheet
  const bottomSheetRef = useRef()
  const [isBottomSheet, setIsBottomSheet] = useState(false)

  const handleSignupFieldsChange = (target, value) => {
    if (target === "username" || target === "password") setSignupAttributes({ ...signUpAttributes, [target]: value })
    else if (target === "email") setSignUpEmail(value)
    else if (target === "phone") setSignUpPhone(value)
    else console.log('Invalid field')
  }

  const togglePrimaryInput = () => {
    if (primaryInput === primaryInputType.Email) setPrimaryInput(primaryInputType.Phone)
    else setPrimaryInput(primaryInputType.Email)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevState => !prevState)
  }

  const handleNext = () => {
    console.log('email: ', signUpEmail)
    console.log('phone: ', signUpPhone)
    console.log({...signUpAttributes})
  }

  return (
    <View style={Styles.container} >
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-180} >
        <View style={[Styles.wrapper]} >
          <GettingStartedHeader />
          <PrimaryInput handleSignupFieldsChange={handleSignupFieldsChange} handleSetFlag={() => setIsBottomSheet(true)} {...primaryInput} onPress={togglePrimaryInput} />
          <NormalInput handleSignupFieldsChange={handleSignupFieldsChange} placeholder={'Username'} />
          <PasswordInput handleSignupFieldsChange={handleSignupFieldsChange} passwordVisibility={passwordVisibility} onPress={togglePasswordVisibility} />
          <View style={[Styles.footerWrapper, {  }]} >
            <PrimaryButton label={'Next'} disabled={!isFormValid} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <BottomActionSheet sheetRef={bottomSheetRef} isActive={isBottomSheet} setIsActive={setIsBottomSheet} sheetSnapPoints={["60%", "90%"]} >
        <View style={{ flex: 1, backgroundColor: '#000' }} >

        </View>
      </BottomActionSheet>
    </View>
  )
};


export default SignupScreen;

