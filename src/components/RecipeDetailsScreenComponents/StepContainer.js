import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { stepContainerStyles } from './Styles';


const StepContainer = ({ index, item }) => {
  return (
    <View style={stepContainerStyles.container} >
      <View style={stepContainerStyles.indexContainer} >
        <Text style={stepContainerStyles.index} >{index + 1}</Text>
      </View>
      <Text style={stepContainerStyles.step} >{item}</Text>
    </View>
  )
};


export default StepContainer;

