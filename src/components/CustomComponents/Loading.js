import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppStyles from '../../AppStyles';
import { loadingStyles } from './Styles';


function Loading ({  }) {
  return (
    <View style={loadingStyles.container} >
      <ActivityIndicator color={AppStyles.primaryColor} size={'large'} />
    </View>
  )
};


export default Loading;

