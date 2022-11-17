import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { accountBoxStyles } from './Styles';


function AccountBox ({ onPressEdit })  {
  return (
    <View style={accountBoxStyles.container} >
      <TouchableOpacity onPress={onPressEdit} activeOpacity={0.95} style={accountBoxStyles.profileImageContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={accountBoxStyles.profileImage} />
        <Ionicons name='pencil' size={15} color={AppStyles.primaryTextColor} style={accountBoxStyles.editIcon} />
      </TouchableOpacity>
    </View>
  )
};


export default AccountBox;
