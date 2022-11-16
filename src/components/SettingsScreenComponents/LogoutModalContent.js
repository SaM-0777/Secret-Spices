import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { logoutModalStyles } from './Styles';


function LogoutModalContent({ onPressCancel, onPressLogout }) {
  return (
    <View style={logoutModalStyles.container} >
      <View style={logoutModalStyles.textContainer} >
        <Text style={logoutModalStyles.text} >Are you sure you want to Logout.</Text>
      </View>
      <View style={logoutModalStyles.btns} >
        <TouchableOpacity onPress={onPressCancel} activeOpacity={0.85} style={logoutModalStyles.btn} >
          <Text style={logoutModalStyles.btnText} >Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogout} activeOpacity={0.85} style={logoutModalStyles.btn} >
          <Text style={[logoutModalStyles.btnText, { color: 'red' }]} >LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


export default LogoutModalContent;

