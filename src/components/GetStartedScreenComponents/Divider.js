import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { dividerStyle } from './Styles';


const Divider = () => {
  return (
    <View style={dividerStyle.container} >
      <View style={dividerStyle.divider} />
      <Text style={dividerStyle.text} >OR</Text>
      <View style={dividerStyle.divider} />
    </View>
  )
};


export default Divider;

