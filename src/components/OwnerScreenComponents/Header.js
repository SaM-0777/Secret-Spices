import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ocitcons from 'react-native-vector-icons/Octicons';

import AppStyle from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({ author, navigation, onPressMore, onPressCreate, isVerified }) {

  function onPressBack() { navigation.goBack() }

  return (
    <View style={headerStyles.container} >
      <View style={headerStyles.leftContainer} >
        <Ionicons onPress={onPressBack} name={'chevron-back'} size={25} color={AppStyle.secondaryColor} />
        <Text ellipsizeMode='tail' numberOfLines={1} style={headerStyles.authorText} >{author}</Text>
        {isVerified ?
          <Ionicons onPress={onPressMore} name={'checkmark-done-circle-outline'} size={25} color={AppStyle.primaryColor} style={{ marginLeft: 10, }} />
          :
          null
        }
      </View>
      <View style={headerStyles.actionContainer} >
        <Ocitcons onPress={onPressCreate} name={'diff-added'} size={21} color={AppStyle.secondaryColor} style={{ marginRight: 15, }} />
        <Ionicons onPress={onPressMore} name={'menu'} size={30} color={AppStyle.secondaryColor} />
      </View>
    </View>
  )
};


export default Header;

