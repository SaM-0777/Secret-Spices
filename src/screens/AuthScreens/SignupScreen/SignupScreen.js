import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StatusBar, View, ToastAndroid, ActivityIndicator } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as RNLocalize from 'react-native-localize';

import { GettingStartedHeader, PrimaryInput, NormalInput, PasswordInput, PrimaryButton, CountryCodeButton, BottomActionSheet } from '../../../components';

// import { validateEmail, validatePhoneNumber, validatePassword, validateUsername } from '../../utils/formValidator/formValidator';
import internationalPhoneCodes from '../../../utils/data/international-phone-codes.json';
import countryCodes from '../../../utils/data/country-codes.json';

import AppStyles from '../../../AppStyles';
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
  const [primaryHelperText, setPrimaryHelperText] = useState({ helperTextType: 'info', helperText: primaryInput.infoText })
  const [isFormValid, setIsFormValid] = useState({ isPrimaryInputValid: false, isUsernameValid: false, isPasswordValid: false })
  const [disablePrimaryButton, setDisablePrimaryButton] = useState(true)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPhone, setSignUpPhone] = useState("")
  const [signUpAttributes, setSignupAttributes] = useState({
    username: "",
    password: "",
  })
  const [flag, setFlag] = useState(countryCodes[RNLocalize.getCountry()]['flag'])
  const [countryCode, setCountryCode] = useState('+' + countryCodes[RNLocalize.getCountry()]['callingCode'])
  // bottom action sheet
  const bottomSheetRef = useRef()
  const [isBottomSheet, setIsBottomSheet] = useState(false)

  // handle when sign up attributes are changed
  const handleSignupFieldsChange = (target, value) => {
    if (target === "username" || target === "password") setSignupAttributes({ ...signUpAttributes, [target]: value })
    else if (target === "email") setSignUpEmail(value)
    else if (target === "phone") setSignUpPhone(countryCode + value)
    else console.log('Invalid field')
  }
  
  /*// validate attributes when they are changed
  useEffect(() => {
    const emailValidation = validateEmail(signUpEmail)
    const phoneValidation = validatePhoneNumber(signUpPhone)
    const usernameValidation = validateUsername(signUpAttributes.username)
    const passwordValidation = validatePassword(signUpAttributes.password)

    const checkEmailValidation = () => {
      if (emailValidation === true) {
        setIsFormValid({...isFormValid, 'isPrimaryInputValid': true})
      } else {

      }
    }
    
    return () => { }
  }, [signUpEmail, signUpPhone, signUpAttributes])*/
  
  // toggle primary input field
  const togglePrimaryInput = () => {
    if (primaryInput === primaryInputType.Email) {
      setPrimaryInput(primaryInputType.Phone)
    }
    else {
      setPrimaryInput(primaryInputType.Email)
    }
  }

  // toggle helper text when primary input field changed
  useEffect(() => {
    setPrimaryHelperText({ ...primaryHelperText, 'helperText': primaryInput.infoText })
    return () => {}
  }, [primaryInput])
  
  // toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevState => !prevState)
  }

  // handle bottom action sheet
  const handleFlagBottomSheet = () => setIsBottomSheet(true)

  // flatList render item
  const renderItem = useCallback(({ item }) => <CountryCodeButton item={item} setCountryCode={setCountryCode} setFlag={setFlag} setIsBottomSheet={setIsBottomSheet} />, [])

  // enable next button when all fields are valid
  useEffect(() => {
    if (isFormValid.isPasswordValid && isFormValid.isPrimaryInputValid && isFormValid.isUsernameValid) setDisablePrimaryButton(false)
    else setDisablePrimaryButton(true)

    return () => { }
  }, [isFormValid])

  // handle when next button is clicked
  const handleNext = () => {
    console.log('email: ', signUpEmail)
    console.log('phone: ', signUpPhone)
    console.log({ ...signUpAttributes })
    navigation.push('email-verification')
  }

  return (
    <View style={Styles.container} >
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }} enableOnAndroid={true} extraScrollHeight={-180} >
        <View style={[Styles.wrapper]} >
          <GettingStartedHeader />
          <PrimaryInput handleSignupFieldsChange={handleSignupFieldsChange} handleFlagBottomScreen={handleFlagBottomSheet} {...primaryInput} helperText={primaryHelperText} onPress={togglePrimaryInput} flag={flag} countryCode={countryCode} setIsFormValid={setIsFormValid} />
          <NormalInput handleSignupFieldsChange={handleSignupFieldsChange} placeholder={'Username'} setIsFormValid={setIsFormValid} />
          <PasswordInput handleSignupFieldsChange={handleSignupFieldsChange} passwordVisibility={passwordVisibility} onPress={togglePasswordVisibility} setIsFormValid={setIsFormValid} />
          <View style={[Styles.footerWrapper, {  }]} >
            <PrimaryButton label={'Next'} disabled={!disablePrimaryButton} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <BottomActionSheet sheetRef={bottomSheetRef} isActive={isBottomSheet} setIsActive={setIsBottomSheet} sheetSnapPoints={["60%", "90%"]} >
        <BottomSheetFlatList
          data={internationalPhoneCodes}
          renderItem={renderItem}
        />
      </BottomActionSheet>
    </View>
  )
};


export default SignupScreen;

