import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { socialLoginButtonStyle } from './Styles';

import { FaceBookSVGIcon, GoogleSVGIcon } from '../../svg';


const SocialLoginButton = ({ icon, label, onPress, textColor, backgroundColor }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[socialLoginButtonStyle.container, { backgroundColor }]} >
      {icon === 'logo-facebook' ?
        <FaceBookSVGIcon width={30} />
        :
        <GoogleSVGIcon width={30} />
      }
      <Text variant={'titleMedium'} style={[socialLoginButtonStyle.text, { color: textColor }]} >{label}</Text>
      <View style={socialLoginButtonStyle.right} />
    </TouchableOpacity>
  )
};


export default SocialLoginButton;

