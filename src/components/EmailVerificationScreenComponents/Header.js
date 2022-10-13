import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { headerStyle } from './Styles';
import AppStyles from '../../../AppStyles';


const Header = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress} style={headerStyle.container} >
      <Ionicons name={'chevron-back'} size={25} color={AppStyles.secondaryColor} />
    </TouchableOpacity>
  )
};


export default Header;

