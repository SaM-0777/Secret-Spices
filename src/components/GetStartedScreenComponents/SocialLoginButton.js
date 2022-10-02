import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { socialLoginButtonStyle } from './Styles';


const SocialLoginButton = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={socialLoginButtonStyle.container} >
      <Ionicons name={icon} size={25} color={'#000'} style={socialLoginButtonStyle.icon} />
      <Text variant={'titleMedium'} style={socialLoginButtonStyle.text} >{label}</Text>
      <View style={socialLoginButtonStyle.right} />
    </TouchableOpacity>
  )
};


export default SocialLoginButton;

