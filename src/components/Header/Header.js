import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { headerStyles } from './Styles';


const Header = ({ header, subHeader }) => {
  return (
    <View style={headerStyles.container} >
      <Text variant={'headlineLarge'} style={headerStyles.headerText} >{header}</Text>
      <Text variant={'bodyMedium'} style={headerStyles.headerSubText} >{subHeader}</Text>
    </View>
  )
};


export default Header;

