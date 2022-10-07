import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { primaryButtonStyle } from './Styles';


const PrimaryButton = ({ label, onPress, textColor, buttonColor }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[primaryButtonStyle.buttonStyle, { backgroundColor: buttonColor }]} >
      <Text variant={'titleMedium'} style={[primaryButtonStyle.textStyle, { color: textColor }]} >{label}</Text>
    </TouchableOpacity>
  )
};


export default PrimaryButton;
