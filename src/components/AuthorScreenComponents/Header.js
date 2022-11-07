import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyle from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ navigation, onPressMore }) {
  
  function onPressBack() { navigation.goBack() }
  function onPressAdd() { navigation.navigate('add-recipe') }

  return (
    <View style={headerStyles.container} >
      <Ionicons onPress={onPressBack} name={'chevron-back'} size={25} color={AppStyle.secondaryColor} />
      <View style={headerStyles.more} >
        <Ionicons onPress={onPressAdd} name={'duplicate-outline'} size={25} color={AppStyle.secondaryColor} style={{ marginRight: 7, }} />
        <Ionicons onPress={onPressMore} name={'menu'} size={32} color={AppStyle.secondaryColor} style={{ marginLeft: 7, }} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({});

export default Header;
