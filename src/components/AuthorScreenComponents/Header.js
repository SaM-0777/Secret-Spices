import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyle from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ author, navigation, onPressMore }) {
  
  function onPressBack() { navigation.goBack() }

  return (
    <View style={headerStyles.container} >
      <View style={headerStyles.leftContainer} >
        <Ionicons onPress={onPressBack} name={'chevron-back'} size={25} color={AppStyle.secondaryColor} />
        <Text style={headerStyles.authorText} >{author}</Text>
      </View>
      <Ionicons onPress={onPressMore} name={'ellipsis-vertical-outline'} size={25} color={AppStyle.secondaryColor} style={{ marginRight: 7, }} />
      {/*<View style={headerStyles.more} >
        <Ionicons onPress={onPressMore} name={'menu'} size={32} color={AppStyle.secondaryColor} style={{ marginLeft: 7, }} />
      </View>*/}
    </View>
  )
};


export default Header;

