import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { primaryButtonStyle } from './Styles';


const PrimaryButton = ({ label, onPress, textColor, buttonColor }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[primaryButtonStyle.buttonStyle, { backgroundColor: buttonColor }]} >
      <Text style={[primaryButtonStyle.textStyle, { color: textColor }]} >{label}</Text>
    </TouchableOpacity>
  )
};


export default PrimaryButton;
