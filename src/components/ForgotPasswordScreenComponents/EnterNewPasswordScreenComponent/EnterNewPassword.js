import React, { useState } from 'react';
import { View, TextInput, } from 'react-native';
import { HelperText } from 'react-native-paper';

import { enterNewPasswordStyles } from '../Styles';


const EnterNewPassword = ({ editable, handleOnAttributesChange }) => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleOnAttributesChange("newPassword", text)

  return (
    <View style={enterNewPasswordStyles.container} >
      <View style={[enterNewPasswordStyles.inputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={"Enter New Password"} cursorColor={AppStyles.secondaryColor} keyboardType={'default'} style={enterNewPasswordStyles.input} />
      </View>
      <HelperText type={'info'} style={[enterNewPasswordStyles.helperText]} >{"Strong passwords include a mix of lower case letters, upper case letters, numbers, and special characters."}</HelperText>
    </View>
  )
};


export default EnterNewPassword;

