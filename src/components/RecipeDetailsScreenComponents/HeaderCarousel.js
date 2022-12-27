import React, { useState, useRef, useEffect } from 'react';
import { View, Image, FlatList, Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyles from '../../AppStyles';

import { headerCarouselStyles } from './Styles';


function RenderItem({ item }) {
  return (
    <Image source={{ uri: item, scale: 1.0 }} resizeMode={'cover'} style={headerCarouselStyles.carouselImage} />
  )
}

function HeaderCarousel({ navigation, heroBanner }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slideRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  function onPressGoBack() { navigation.goBack() }
  function onPressLeft () {}
  function onPressRight() { }
  
  return (
    <View style={headerCarouselStyles.container} >
      <View style={headerCarouselStyles.backContainer} >
        <Ionicons onPress={onPressGoBack} name='chevron-back' size={22} color={AppStyles.primaryTextColor}  />
      </View>
      <FlatList
        data={heroBanner}
        renderItem={({ item }) => <RenderItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      {/*<View style={headerCarouselStyles.indicatorContainer} >
        <Ionicons onPress={onPressLeft} name={'chevron-back'} size={22} color={AppStyles.secondaryColor} style={{ marginRight: 20 }} />
        {heroBanner?.map((_, i) => {
          const width = Dimensions.get('window').width
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
          
          const dotSize = scrollX.interpolate({
            inputRange,
            outputRange: [10, 14, 10],
            extrapolate: 'clamp'
          })

          const borderWidth = scrollX.interpolate({
            inputRange,
            outputRange: [2, 3, 2],
            extrapolate: 'clamp'
          })
          
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })
          
          return (
            <Animated.View key={i.toString()} style={[headerCarouselStyles.dot, { width: dotSize, height: dotSize, borderWidth: borderWidth, opacity: opacity }]} />
            )
        })}
        <Ionicons onPress={onPressRight} name={'chevron-forward'} size={22} color={AppStyles.secondaryColor} style={{ marginLeft: 20 }} />
      </View>*/}
    </View>
  )
};


export default HeaderCarousel;

