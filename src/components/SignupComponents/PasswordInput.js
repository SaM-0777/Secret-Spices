import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { passwordInputStyles } from './Styles';


const PasswordInput = ({ passwordVisibility, onPress }) => {
  return (
    <View style={passwordInputStyles.container} >
      <TextInput placeholder={'Password'} secureTextEntry={passwordVisibility} style={passwordInputStyles.input} />
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={passwordInputStyles.button} >
        <Ionicons name={passwordVisibility ? 'eye-outline' : 'eye-off-outline'} size={25} />
      </TouchableOpacity>
    </View>
  )
};


export default PasswordInput;

