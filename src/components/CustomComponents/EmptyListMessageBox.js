import React from 'react';
import { View, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { emptyListMessageBoxStyles } from './Styles';


function EmptyListMessageBox ({text}){
  return (
    <View style={emptyListMessageBoxStyles.container} >
      <Text style={emptyListMessageBoxStyles.text} >{text || "No Data yet"}</Text>
    </View>
  )
};


export default EmptyListMessageBox;

