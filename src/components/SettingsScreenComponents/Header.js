import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ navigation }) {

  function onPressGoBack() {
    navigation.goBack()
  }

  return (
    <View style={headerStyles.container} >
      <Ionicons onPress={onPressGoBack} name='chevron-back' size={25} color={AppStyles.primaryTextColor} />
      <Text style={headerStyles.headerText} >Settings</Text>
    </View>
  )
}


export default Header;

