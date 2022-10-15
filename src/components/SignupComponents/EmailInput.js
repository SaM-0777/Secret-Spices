import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { HelperText } from 'react-native-paper';

import { validateEmail } from '../../utils/formValidator/formValidator';

import AppStyles from '../../AppStyles';
import { emailInputStyles } from './Styles';


const EmailInput = ({ editable, handleSignupAttributesChange, setIsFormValid }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isTextChanged, setIsTextChanged] = useState(false)
  const [helperText, setHelperText] = useState({ type: 'info', text: 'Youll need to verify that you own this email account.' })
  
  const onFocus = () => {
    setIsFocused(true)
  }
  const onBlur = () => setIsFocused(false)
  
  const onChangeText = (text) => {
    setIsTextChanged(true)
    // verify
    if (validateEmail(text)) {
      setIsValid(true)
      setIsFormValid(prevState => ({...prevState, 'isEmailValid': true}))
      setHelperText({ ...helperText, 'text': 'Youll need to verify that you own this email account.'})
    }
    else {
      setIsValid(false)
      setIsFormValid(prevState => ({ ...prevState, 'isEmailValid': false }))
      setHelperText({...helperText, 'text': 'This email is invalid.'})
    }

    handleSignupAttributesChange("email", text)
  }
  
  return (
    <View style={emailInputStyles.container} >
      <View style={[emailInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}, isTextChanged ? !isValid ? { borderWidth: 2, borderColor: AppStyles.invalidTextIndicatorColor } : {  } : { }]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Email'} maxLength={50} cursorColor={AppStyles.secondaryColor} keyboardType={'email-address'} style={emailInputStyles.emailInput} />
      </View>
      <HelperText type={helperText.type} style={[emailInputStyles.helperText, isTextChanged ? !isValid ? { color: AppStyles.invalidTextIndicatorColor } : { color: AppStyles.secondaryTextColor } : { color: AppStyles.secondaryTextColor }]} >{helperText.text}</HelperText>
    </View>
  )
};


export default EmailInput;

