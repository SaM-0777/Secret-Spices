import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { HelperText } from 'react-native-paper';

import { validateEmail } from '../../utils/formValidator/formValidator';

import AppStyles from '../../AppStyles';
import { emailInputStyles } from './Styles';


const EmailInput = ({ editable, handleSignupAttributesChange }) => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleSignupAttributesChange("email", text)
  
  return (
    <View style={emailInputStyles.container} >
      <View style={[emailInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Email'} maxLength={50} cursorColor={AppStyles.secondaryColor} keyboardType={'email-address'} style={emailInputStyles.emailInput} />
      </View>
    </View>
  )
};


export default EmailInput;

