import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../../AppStyles';
import { primaryInputStyles } from './Styles';


const PrimaryInput = ({ type, infoText, placeholder, icon, iconText, onPress }) => {
  return (
    <View style={primaryInputStyles.container} >
      {type === 'Email' ? 
        <View style={primaryInputStyles.emailInputContainer} >
          <TextInput placeholder={placeholder} keyboardType={'email-address'} style={primaryInputStyles.emailInput} />
        </View>
        :
        <View style={primaryInputStyles.phoneInputContainer} > 
          <TextInput placeholder={'+91'} style={primaryInputStyles.phoneCodeInput} />
          <View style={primaryInputStyles.separator} />
          <TextInput placeholder={placeholder} keyboardType={'phone-pad'} style={primaryInputStyles.phoneInput} />
        </View>
      }
      
      <Text style={primaryInputStyles.infoText} >{infoText}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={primaryInputStyles.primaryFieldToggleWrapper} >
        <Ionicons name={icon} size={25} color={AppStyles.secondaryColor} />
        <Text style={primaryInputStyles.buttonText} >{iconText}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default PrimaryInput;

