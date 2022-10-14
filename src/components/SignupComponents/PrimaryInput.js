import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { primaryInputStyles } from './Styles';


const PrimaryInput = ({ type, helperText, placeholder, icon, iconText, handleSignupFieldsChange, onPress, flag, handleFlagBottomScreen, countryCode, setIsFormValid }) => {
  const [isFocused, setIsFocused] = useState(true)
  
  return (
    <View style={primaryInputStyles.container} >
      {type === 'Email' ?
        <View style={[primaryInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : { }]} >
          <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("email", text)} placeholder={placeholder} maxLength={25} keyboardType={'email-address'} style={primaryInputStyles.emailInput} />
        </View>
        :
        <View style={[primaryInputStyles.phoneInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : { }]} >
          <TouchableOpacity activeOpacity={0.8} onPress={handleFlagBottomScreen} style={primaryInputStyles.phoneCountryCodeContainer} >
            <Image source={{ uri: flag, scale: 1 }} resizeMode={'contain'} style={primaryInputStyles.countryFlag} />
            <Ionicons name={'chevron-down'} size={15} color={AppStyles.secondaryColor} style={primaryInputStyles.phoneInputIcon} />
          </TouchableOpacity>
          <View style={primaryInputStyles.separator} />
          <Text style={primaryInputStyles.countryCode} >{countryCode}</Text>
          <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("phone", text)} maxLength={17} keyboardType={'phone-pad'} style={[primaryInputStyles.phoneInput,]} />
        </View>
      }
      <HelperText type={helperText.helperTextType} style={primaryInputStyles.infoText} >{helperText.helperText}</HelperText>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={primaryInputStyles.primaryFieldToggleWrapper} >
        <Ionicons name={icon} size={25} color={AppStyles.secondaryColor} />
        <Text style={primaryInputStyles.buttonText} >{iconText}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default PrimaryInput;

