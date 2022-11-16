import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { settingTabStyles } from './Styles';


function SettingTab({ text, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={settingTabStyles.container} >
      <Text style={settingTabStyles.btnText} >{text}</Text>
      <Ionicons name={icon} size={20} color={AppStyles.secondaryTextColor} />
    </TouchableOpacity>
  )
};


export default SettingTab;

