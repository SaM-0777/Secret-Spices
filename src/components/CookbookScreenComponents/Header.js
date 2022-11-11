import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { headerStyle } from './Styles';


function Header({ navigation, onPressMore }) {
  function onPress() {
    navigation.goBack()
  }

  return (
    <View style={headerStyle.container} >
      <Ionicons onPress={onPress} name='chevron-back' size={25} color={AppStyles.secondaryColor} />
      <Ionicons onPress={onPressMore} name='ellipsis-vertical-outline' size={25} color={AppStyles.secondaryColor} />
    </View>
  )
};


export default Header;

