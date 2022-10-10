import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { primaryButtonStyle } from './Styles';


const PrimaryButton = ({ disabled, label, onPress, textColor, buttonColor }) => {
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} onPress={onPress} style={[primaryButtonStyle.buttonStyle, { backgroundColor: disabled ? '#E5E5E5' : buttonColor }]} >
      <Text variant={'titleMedium'} style={[primaryButtonStyle.textStyle, { color: disabled ? '#999999' : textColor }]} >{label}</Text>
    </TouchableOpacity>
  )
};


export default PrimaryButton;
