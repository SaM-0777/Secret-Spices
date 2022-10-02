import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { headerStyle } from './Styles';

const Header = () => {
  return (
    <View style={headerStyle.container} >
      <Text variant={'headlineLarge'} style={headerStyle.headerText} >Let's Get Started</Text>
      <Text variant={'bodyMedium'} style={headerStyle.headerSubText} >Sign up or login into to have a full digital experience in our restaurant</Text>
    </View>
  )
};


export default Header;

