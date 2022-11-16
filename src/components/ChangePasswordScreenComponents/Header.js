import React from 'react';
import { View, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { headerStyles } from './Styles';


function Header({  }) {
  return (
    <View style={headerStyles.container} >
      <Text style={headerStyles.headerText} >Change Password</Text>
    </View>
  )
};


export default Header;

