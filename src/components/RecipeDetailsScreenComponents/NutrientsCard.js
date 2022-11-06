import React from 'react';
import { View, Text } from 'react-native';

import { nutrientsContainerStyles } from './Styles';


function NutrientsCard({ item, index }) {
  return (
    <View style={nutrientsContainerStyles.container} >
      <Text style={nutrientsContainerStyles.key} >{Object.keys(item)[0]}</Text>
      <Text style={nutrientsContainerStyles.value} >{item[Object.keys(item)[0]]}</Text>
    </View>
  )
};


export default NutrientsCard;

