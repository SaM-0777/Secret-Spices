import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { onBoardingItemStyles } from '../Styles';


const OnBoardingItem = ({ item }) => {
  return (
    <View style={onBoardingItemStyles.container} >
      <Image source={item.image} resizeMode={'contain'} style={onBoardingItemStyles.image} />
      <View style={onBoardingItemStyles.textWrapper} >
        <Text style={onBoardingItemStyles.title} >{item.title}</Text>
        <Text style={onBoardingItemStyles.description} >{item.description}</Text>
      </View>
    </View>
  )
};


export default OnBoardingItem;

