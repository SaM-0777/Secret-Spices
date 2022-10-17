import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import AppStyles from '../../../AppStyles';
import { enterCodeStyles } from '../Styles';


const EnterCode = ({ editable, handleOnAttributesChange }) => {
  const [isFocused, setIsFocused] = useState(true)
  
  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleOnAttributesChange("code", text)

  return (
    <View style={enterCodeStyles.container} >
      <View style={[enterCodeStyles.inputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
        <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={"Enter OTP"} cursorColor={AppStyles.secondaryColor} maxLength={6} keyboardType={'number-pad'} style={enterCodeStyles.input} />
      </View>
    </View>
  )
};


export default EnterCode;

