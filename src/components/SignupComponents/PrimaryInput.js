import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../../AppStyles';
import { primaryInputStyles } from './Styles';


const PrimaryInput = ({ type, infoText, placeholder, icon, iconText, handleSignupFieldsChange, onPress }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={primaryInputStyles.container} >
      {type === 'Email' ?
        <View style={[primaryInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : { }]} >
          <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("email", text)} placeholder={placeholder} maxLength={25} keyboardType={'email-address'} style={primaryInputStyles.emailInput} />
        </View>
        :
        <View style={primaryInputStyles.phoneInputContainer} > 
          <Text style={primaryInputStyles.phoneCodeInput} >+91</Text>
          <View style={primaryInputStyles.separator} />
          <TextInput onChangeText={(text) => handleSignupFieldsChange("phone", text)} placeholder={placeholder} keyboardType={'phone-pad'} style={primaryInputStyles.phoneInput} />
        </View>
      }
      <HelperText type={'info'} style={primaryInputStyles.infoText} >{infoText}</HelperText>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={primaryInputStyles.primaryFieldToggleWrapper} >
        <Ionicons name={icon} size={25} color={AppStyles.secondaryColor} />
        <Text style={primaryInputStyles.buttonText} >{iconText}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default PrimaryInput;

