import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { headerStyle } from './Styles';


const Header = () => {
  return (
    <View style={headerStyle.container} >
      <Text variant={'headlineLarge'} style={headerStyle.headerText} >Getting Started!</Text>
      <Text variant={'bodyMedium'} style={headerStyle.headerSubText} >Look like you are new to us! Create an account for an complete experience.</Text>
    </View>
  )
};


export default Header;

