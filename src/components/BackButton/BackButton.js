import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { backButtonStyles } from './Styles';


const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress} style={backButtonStyles.container} >
      <Ionicons name={'chevron-back'} size={25} color={AppStyles.secondaryColor} />
    </TouchableOpacity>
  )
};


export default BackButton;

