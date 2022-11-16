import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { HelperText } from 'react-native-paper';

import AppStyles from '../../AppStyles';
import { newPasswordStyles } from './Styles';


function PasswordInput({ editable, handleOnAttributesChange }) {
  const [isFocused, setIsFocues] = useState(false)

  function onFocus () { setIsFocues(true) }
  function onBlur() { setIsFocues(false) }
  
  function onChangeText (text) { handleOnAttributesChange("newPassword", text) }

  return (
    <View style={newPasswordStyles.container} >
      <View style={[newPasswordStyles.inputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={"Enter New Password"} cursorColor={AppStyles.secondaryColor} keyboardType={'default'} style={newPasswordStyles.input} />
      </View>
      <HelperText type={'info'} style={[newPasswordStyles.helperText]} >{"Strong passwords include a mix of lower case letters, upper case letters, numbers, and special characters."}</HelperText>
    </View>
  )
};


export default PasswordInput;

