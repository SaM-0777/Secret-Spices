import React from 'react';
import { View, TextInput } from 'react-native';

import { normalInputStyles } from './Styles';


const NormalInput = ({ placeholder }) => {
  return (
    <View style={normalInputStyles.container} >
      <TextInput placeholder={placeholder} style={normalInputStyles.input} />
    </View>
  )
};


export default NormalInput;

