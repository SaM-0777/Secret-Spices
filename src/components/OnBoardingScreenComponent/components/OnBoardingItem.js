import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { onBoardingItemStyles } from '../Styles';


const OnBoardingItem = ({ item }) => {
  return (
    <View style={onBoardingItemStyles.container} >
      <Image source={item.image} resizeMode={'contain'} style={onBoardingItemStyles.image} />
      <View style={onBoardingItemStyles.textWrapper} >
        <Text variant={'bodyLarge'} style={onBoardingItemStyles.title} >{item.title}</Text>
        <Text variant={'bodySmall'} style={onBoardingItemStyles.description} >{item.description}</Text>
      </View>
    </View>
  )
};


export default OnBoardingItem;

