import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import AppStyles from '../../AppStyles';
import { oldPasswordStyles } from './Styles';


function OldPasswordInput({ editable, handleOnAttributesChange }) {
  const [isFocused, setIsFocus] = useState(true)

  function onFocus() { setIsFocus(true) }
  function onBlur() { setIsFocus(false) }

  function onChangeText(text) { handleOnAttributesChange("oldPassword", text) }

  return (
    <View style={oldPasswordStyles.container} >
      <View style={[oldPasswordStyles.inputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={"Enter Old Password"} cursorColor={AppStyles.secondaryColor} keyboardType={'default'} style={oldPasswordStyles.input} />
      </View>  
    </View>
  )
};


export default OldPasswordInput;

