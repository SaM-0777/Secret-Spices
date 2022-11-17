import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { inputFieldStyles } from './Styles';


function AccountField({ label, focused }) {
  const [isFocused, setIsFocused] = useState(focused)

  function onFocused () { setIsFocused(true) }
  function onBlurred () { setIsFocused(false) }

  return (
    <View style={inputFieldStyles.container} >
      <Text style={inputFieldStyles.label} >{label}</Text>
      <View style={inputFieldStyles.inputContainer} >
        <TextInput onFocus={onFocused} onBlur={onBlurred} maxLength={20} cursorColor={AppStyles.primaryTextColor} style={inputFieldStyles.input} />
        {/*<Ionicons name='chevron-forward' size={22} color={AppStyles.primaryTextColor} />*/}
      </View>
    </View>
  )
};


export default AccountField;

