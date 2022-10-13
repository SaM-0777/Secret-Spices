import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RNLocalize from 'react-native-localize';

import countryCodes from '../../utils/data/country-codes.json';

import AppStyles from '../../../AppStyles';
import { primaryInputStyles } from './Styles';


const PrimaryInput = ({ type, infoText, placeholder, icon, iconText, handleSignupFieldsChange, onPress, handleSetFlag }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [flag, setFlag] = useState(countryCodes[RNLocalize.getCountry()]['flag'])
  
  return (
    <View style={primaryInputStyles.container} >
      {type === 'Email' ?
        <View style={[primaryInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : { }]} >
          <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("email", text)} placeholder={placeholder} maxLength={25} keyboardType={'email-address'} style={primaryInputStyles.emailInput} />
        </View>
        :
        <View style={primaryInputStyles.phoneInputContainer} > 
          <TouchableOpacity activeOpacity={0.8} onPress={handleSetFlag} style={primaryInputStyles.phoneCountryCodeContainer} >
            <Image source={{ uri: flag, scale: 1 }} resizeMode={'contain'} style={primaryInputStyles.countryFlag} />
            <Ionicons name={'chevron-down'} size={15} color={AppStyles.secondaryColor} style={primaryInputStyles.phoneInputIcon} />
          </TouchableOpacity>
          <View style={primaryInputStyles.separator} />
          <Text style={primaryInputStyles.countryCode} >{'+' + countryCodes[RNLocalize.getCountry()]['callingCode']}</Text>
          <TextInput onChangeText={(text) => handleSignupFieldsChange("phone", text)} maxLength={17} placeholder={placeholder} keyboardType={'phone-pad'} style={[primaryInputStyles.phoneInput,]} />
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

