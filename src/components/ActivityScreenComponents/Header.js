import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ navigation, onPressSettings }) {

  function onPressGoBack() { navigation.goBack() }

  return (
    <View style={headerStyles.container} >
      <View style={headerStyles.textContainer} >
        <Ionicons onPress={onPressGoBack} name='chevron-back' size={25} color={AppStyles.primaryTextColor} />
        <Text style={headerStyles.text} >Activity</Text>
      </View>
      <Ionicons onPress={onPressSettings} name='settings-outline' size={25} color={AppStyles.primaryTextColor} />
    </View>
  )
};


export default Header;

