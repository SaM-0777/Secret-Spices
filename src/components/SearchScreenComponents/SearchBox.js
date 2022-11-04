import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyles from '../../AppStyles';

import { searchBoxStyles } from './Styles';


function SearchBox({ navigation }) {
  const [isFocused, setIsFocused] = useState(true)

  function onFocus() { setIsFocused(true) }
  function onBlur() { setIsFocused(false) }
  function onPress() { navigation.goBack() }

  return (
    <View style={searchBoxStyles.container} >
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={searchBoxStyles.icon} >
        <Ionicons name={'arrow-back-outline'} size={23} />
      </TouchableOpacity>
      <TextInput autoFocus={true} onFocus={onFocus} onBlur={onBlur} placeholder={'Search'} keyboardType={'default'} cursorColor={AppStyles.secondaryColor} style={searchBoxStyles.input} />
    </View>
  )
};


export default SearchBox;

