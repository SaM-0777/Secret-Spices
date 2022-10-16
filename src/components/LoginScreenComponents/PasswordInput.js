import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { passwordInputStyles } from './Styles';


const PasswordInput = ({ editable, handleSignInAttributes }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onChangeText = (text) => handleSignInAttributes("password", text)
  const handlePasswordVisibility = () => setPasswordVisible(prevState => !prevState)

  return (
    <View style={[passwordInputStyles.container, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {}]} >
      <TextInput editable={editable} onFocus={onFocus} onBlur={onBlur} onChangeText={(text) => onChangeText(text)} placeholder={'Password'} cursorColor={AppStyles.secondaryColor} secureTextEntry={!passwordVisible} style={passwordInputStyles.input} />
      <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordVisibility} style={passwordInputStyles.button} >
        <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={25} />
      </TouchableOpacity>
    </View>
  )
};


export default PasswordInput;

