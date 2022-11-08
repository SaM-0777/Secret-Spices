import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyle from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ author, navigation, onPressMore, isVerified }) {
  
  function onPressBack() { navigation.goBack() }

  return (
    <View style={headerStyles.container} >
      <View style={headerStyles.leftContainer} >
        <Ionicons onPress={onPressBack} name={'chevron-back'} size={25} color={AppStyle.secondaryColor} />
        <Text style={headerStyles.authorText} >{author}</Text>
        {isVerified ? 
          <Ionicons onPress={onPressMore} name={'checkmark-done-circle-outline'} size={25} color={AppStyle.primaryColor} style={{ marginLeft: 10, }} />
        :
          null
        }
      </View>
      <Ionicons onPress={onPressMore} name={'ellipsis-vertical-outline'} size={25} color={AppStyle.secondaryColor} />
    </View>
  )
};


export default Header;

