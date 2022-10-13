import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { countryCodeButtonStyles } from './Styles';


const CountryCodeButton = ({ item, setCountryCode, setFlag, setIsBottomSheet }) => {
  const onPress = () => {
    setFlag(item.flag)
    setCountryCode('+' + item.callingCode)
    setIsBottomSheet(false)
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={countryCodeButtonStyles.container} >
      <Image source={{ uri: item.flag, }} resizeMode={'cover'} style={countryCodeButtonStyles.image} />
      <Text style={countryCodeButtonStyles.text} >{item.name.common}  {'(+' + item.callingCode + ')'}</Text>
    </TouchableOpacity>
  )
};


export default CountryCodeButton;

