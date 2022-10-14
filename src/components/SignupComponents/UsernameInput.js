import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { HelperText } from 'react-native-paper';

import { validateUsername } from '../../utils/formValidator/formValidator';

import { usernameInputStyles } from './Styles';


const UsernameInput = ({ handleSignupAttributesChange, setIsFormValid }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isTextChanged, setIsTextChanged] = useState(false)
  const [helperText, setHelperText] = useState({ type: 'info', text: 'This is how others see you.' })

  const onFocus = () => {
    setIsFocused(true)
  }
  const onBlur = () => setIsFocused(false)
  
  const onChangeText = (text) => {
    setIsTextChanged(true)
    // verify
    if (validateUsername(text)) {
      setIsValid(true)
      setIsFormValid(prevState => ({ ...prevState, 'isUsernameValid': true}))
      setHelperText({ ...helperText, 'text': 'This is how others see you.'})
    }
    else {
      setIsValid(false)
      setIsFormValid(prevState => ({ ...prevState, 'isUsernameValid': false}))
      setHelperText({ ...helperText, 'text': 'Invalid username.'})
    }

    handleSignupAttributesChange("username", text)
  }

  return (
    <View>
      <View style={[usernameInputStyles.container, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}, isTextChanged ? !isValid ? { borderWidth: 2, borderColor: AppStyles.invalidTextIndicatorColor } : {} : {}]} >
        <TextInput onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Username'} cursorColor={AppStyles.secondaryColor} style={usernameInputStyles.input} />
      </View>
      {isFocused || !isValid ? <HelperText type={helperText.type} style={[usernameInputStyles.helperText, isTextChanged ? !isValid ? { color: AppStyles.invalidTextIndicatorColor } : { color: AppStyles.secondaryTextColor } : { color: AppStyles.secondaryTextColor }]} >{helperText.text}</HelperText> : null }
    </View>
  )
};


export default UsernameInput;

