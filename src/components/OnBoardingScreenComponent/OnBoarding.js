import React, { useState, useRef } from 'react';
import { View, FlatList, Animated } from 'react-native';

import { OnBoardingItem, Paginator } from './components';
import { onBoardingStyles } from './Styles';

import onBoardingData from '../../utils/onBoardingData';


const OnBoarding = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  const viewableItmesChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={onBoardingStyles.container} >
      <FlatList
        data={onBoardingData}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false, })}
        onViewableItemsChanged={viewableItmesChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View style={onBoardingStyles.paginatorWrapper} >
        <Paginator data={onBoardingData} scrollX={scrollX} />
      </View>
    </View>
  )
};


export default OnBoarding;

