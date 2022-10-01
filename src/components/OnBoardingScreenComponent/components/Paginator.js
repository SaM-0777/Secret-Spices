import React from 'react';
import { View, Animated, Dimensions } from 'react-native';

import { paginatorStyles } from '../Styles';


const Paginator = ({ data, scrollX }) => {
  const { width } = Dimensions.get('window')

  return (
    <View style={paginatorStyles.container} >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
        
        const indicatorWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        const indicatorOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7],
          extrapolate: 'clamp',
        }) 
        
        return <Animated.View key={i.toString()} style={[paginatorStyles.indicator, { width: indicatorWidth, opacity: indicatorOpacity }]} />
      })}
    </View>
  )
};


export default Paginator;

