import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { HelperText } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { validatePassword } from '../../utils/formValidator/formValidator';

import { passwordInputStyles } from './Styles';


const PasswordInput = ({ editable, handleSignupAttributesChange, setIsFormValid }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isTextChanged, setIsTextChanged] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [helperText, setHelperText] = useState({ type: 'info', text: 'Strong passwords include a mix of lower case letters, upper case letters, numbers, and special characters.' })

  const onFocus = () => {
    setIsFocused(true)
  }
  const onBlur = () => setIsFocused(false)
  const handlePasswordVisibility = () => setPasswordVisible(prevState => !prevState)
  
  const onChangeText = (text) => {
    setIsTextChanged(true)
    // verify
    if (validatePassword(text)) {
      setIsValid(true)
      setIsFormValid(prevState => ({ ...prevState, 'isPasswordValid': true }))
      setHelperText({ ...helperText, 'text': 'Strong passwords include a mix of lower case letters, upper case letters, numbers, and special characters.'})
    }
    else {
      setIsValid(false)
      setIsFormValid(prevState => ({ ...prevState, 'isPasswordValid': false }))
      setHelperText({ ...helperText, 'text': 'Password too weak. You must use a strong password to continue.'})
    }

    handleSignupAttributesChange("password", text)
  }

  return (
    <View>
      <View style={[passwordInputStyles.container, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}, isTextChanged ? !isValid ? { borderWidth: 2, borderColor: AppStyles.invalidTextIndicatorColor } : {} : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Password'} cursorColor={AppStyles.secondaryColor} secureTextEntry={!passwordVisible} style={passwordInputStyles.input} />
        <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordVisibility} style={passwordInputStyles.button} >
          <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={25} />
        </TouchableOpacity>
      </View>
      {isFocused || !isValid ? <HelperText type={helperText.type} style={[passwordInputStyles.helperText, isTextChanged ? !isValid ? { color: AppStyles.invalidTextIndicatorColor } : { color: AppStyles.secondaryTextColor } : { color: AppStyles.secondaryTextColor }]} >{helperText.text}</HelperText> : null }
    </View>
  )
};


export default PasswordInput;

