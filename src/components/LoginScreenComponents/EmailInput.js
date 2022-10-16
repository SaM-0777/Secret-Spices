import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import AppStyles from '../../AppStyles';
import { emailInputStyles } from './Styles';


const EmailInput = ({ editable, handleSignInAttributes }) => {
  const [isFocused, setIsFocused] = useState(true)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleSignInAttributes("email", text)
  
  return (
    <View style={emailInputStyles.container} >
      <View style={[emailInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Email'} maxLength={50} cursorColor={AppStyles.secondaryColor} keyboardType={'email-address'} style={emailInputStyles.emailInput} />
      </View>
    </View>
  )
};


export default EmailInput;

