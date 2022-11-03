import React, { useEffect, useRef, useState } from 'react';
import { View, StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import { Portal } from '@gorhom/portal';
import { Text } from 'react-native-paper';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, BottomActionSheet } from '../../../components';

import Styles from './Styles';

import { getData } from "../../../utils/api";
import recipeDisplay from '../../../utils/data/recipeDisplay.json';


const HomeScreen = ({ navigation }) => {
  const shareSheetRef = useRef()
  const [isShareSheetActive, setIsShareSheetActive] = useState(false)
  const shareSheetSnapPoints = ['50%',]
  const HEADER_HEIGHT = 200
  const scrollY = new Animated.Value(0)
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
        <Animated.View style={[Styles.header, { height: HEADER_HEIGHT }]} >
          <HomeScreenHeader />
          <SearchBar navigation={navigation} />
          <MenuTypeScrollBar />
        </Animated.View>
        {/*<RecipeCard key={item.id} item={item} navigation={navigation} onShare={onShareRecipe} />*/}
        <View style={{ marginTop: 0 }} >
          <Animated.FlatList
            data={data}
            renderItem={({ item }) => <RecipeCard key={item._id} item={item} navigation={navigation} onShare={onShareRecipe} />}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: scrollY}}}
            ], {useNativeDriver: false})}
          />
        </View>
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

