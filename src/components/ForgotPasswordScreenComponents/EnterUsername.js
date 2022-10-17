import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { HelperText } from 'react-native-paper';

import AppStyles from '../../AppStyles';
import { enterUsernameStyles } from './Styles';


const EnterUsername = ({ editable, handleOnChangeUsername }) => {
  const [isFocused, setIsFocused] = useState(true)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleOnChangeUsername(text)

  return (
    <View style={enterUsernameStyles.container} >
      <View style={[enterUsernameStyles.inputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Email'} maxLength={50} cursorColor={AppStyles.secondaryColor} keyboardType={'email-address'} style={enterUsernameStyles.input} />
      </View>
      <HelperText style={enterUsernameStyles.helperText} >We'll send you a verification code to know its really you.</HelperText>
    </View>
  )
};


export default EnterUsername;

