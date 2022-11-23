import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import AppStyles from '../../AppStyles';
import { shareLoadingMaskStyles } from './Styles';


function ShareLoadingMask({}) {
  return (
    <View style={shareLoadingMaskStyles.container} >
      <View style={shareLoadingMaskStyles.mask} />
      <View style={shareLoadingMaskStyles.loadingContainer} >
        <ActivityIndicator size={'small'} color={AppStyles.primaryColor} />
        <Text style={shareLoadingMaskStyles.text} >Loading</Text>
      </View>
    </View>
  )
};


export default ShareLoadingMask;

