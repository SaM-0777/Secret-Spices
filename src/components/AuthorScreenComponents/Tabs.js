import React, { useState, useEffect, createRef, useRef } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';

import { tabStyle } from './Styles';


function Tabs({ scrollX }) {
  const { width } = Dimensions.get('window')
  const data = [
    { id: 1, tabText: "Recipes", ref: createRef() },
    { id: 2, tabText: "Cookbooks", ref: createRef() },
    { id: 3, tabText: "About", ref: createRef() },
  ]
  const containerRef = useRef()
  const [measures, setMeasures] = useState([])

  const inputRange = data.map((_, i) => i * width)

  useEffect(() => {
    let m = []
    data.map(item => {
      item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
        m.push({ x, y, width, height })
        if (m.length === data.length) setMeasures(m)
      })
    })
    return () => { }
  }, [measures])

  return (
    <View style={tabStyle.tabs} >
      <View ref={containerRef} style={tabStyle.tabContainer} >
        {data.map((item, index) => (
          <View ref={item.ref} style={tabStyle.tab} key={index.toString()} >
            <Text style={tabStyle.tabText} >{item.tabText}</Text>
          </View>
        ))}
      </View>
      {measures.length > 0 && <Animated.View style={[tabStyle.tabIndicator, {
        width: scrollX.interpolate({
          inputRange,
          outputRange: measures.map(measure => measure.width),
          extrapolate: 'clamp',
        }), transform: [{
          translateX: scrollX.interpolate({
            inputRange,
            outputRange: measures.map(measure => measure.x)
          })
        }], left: 0
      }]} />}
    </View>
  )
};


export default Tabs;

