import React, { useEffect, useRef, useState } from 'react';
import { View, StatusBar, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';
import { Text } from 'react-native-paper';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, BottomActionSheet, RecipeHomeCardSkeleton } from '../../../components';

import Styles from './Styles';

import { getData } from "../../../utils/api";


const HomeScreen = ({ navigation }) => {
  const shareSheetRef = useRef()
  const [isShareSheetActive, setIsShareSheetActive] = useState(false)
  const shareSheetSnapPoints = ['50%',]
  // const HEADER_HEIGHT = 180

  const [data, setData] = useState(null)

  function onShareRecipe() {
    setIsShareSheetActive(true)
  }

  async function getResponse() {
    const response = await getData()
    setData(response)
  }

  useEffect(() => {
    if (!data) getResponse()
    
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <View style={[Styles.header ]} >
          <HomeScreenHeader />
          <SearchBar navigation={navigation} />
          <MenuTypeScrollBar />
        </View>
        {/*<RecipeCard key={item.id} item={item} navigation={navigation} onShare={onShareRecipe} />*/}
        <RecipeHomeCardSkeleton />
        <ScrollView showsVerticalScrollIndicator={false} >
          {data?.map(item => (
            <RecipeCard key={item._id} item={item} navigation={navigation} onShare={onShareRecipe} />
          ))}
        </ScrollView>
      </View>
      <Portal>
        <BottomActionSheet sheetRef={shareSheetRef} sheetSnapPoints={shareSheetSnapPoints} isActive={isShareSheetActive} setIsActive={setIsShareSheetActive} >
          {}
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default HomeScreen;


/**
 * <FlatList
          data={data}
          renderItem={({ item }) => <RecipeCard key={item._id} item={item} navigation={navigation} onShare={onShareRecipe} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ], { useNativeDriver: false })}
          scrollEventThrottle={16}
          style={{ flexGrow: 1 }}
        />
 */

