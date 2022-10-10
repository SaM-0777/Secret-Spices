import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { HelperText } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { passwordInputStyles } from './Styles';


const PasswordInput = ({ handleSignupFieldsChange, passwordVisibility, onPress }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View>
      <View style={[passwordInputStyles.container, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {  }]} >
        <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("password", text)} placeholder={'Password'} secureTextEntry={!passwordVisibility} style={passwordInputStyles.input} />
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={passwordInputStyles.button} >
          <Ionicons name={passwordVisibility ? 'eye-off-outline' : 'eye-outline'} size={25} />
        </TouchableOpacity>
      </View>
      {isFocused ?
        <HelperText type={'info'} style={passwordInputStyles.infoText} >
          Strong passwords include a mix of lower case letters, upper case letters, numbers, and special characters.
        </HelperText>
      :
        null
      }
    </View>
  )
};


export default PasswordInput;

