import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { headerStyle } from './Styles';


const Header = ({  }) => {
  return (
    <View style={headerStyle.container} >
      <Text variant={'headlineLarge'} style={headerStyle.headerText} >Welcome</Text>
      <Text variant={'bodyMedium'} style={headerStyle.headerSubText} >Sign in to explore the world of food.</Text>
    </View>
  )
};


export default Header;
