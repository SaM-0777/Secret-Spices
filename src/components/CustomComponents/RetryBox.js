import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { retryBoxStyles } from './Styles';


function RetryBox({ onPress }) {
  return (
    <View style={retryBoxStyles.container} >
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={retryBoxStyles.btn} >
        <Ionicons name={'alert-circle-outline'} size={25} color={AppStyles.secondaryColor} />
        <Text style={retryBoxStyles.text} >Retry</Text>
      </TouchableOpacity>
    </View>
  )
};


export default RetryBox;

