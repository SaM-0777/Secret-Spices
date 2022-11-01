import React, { useEffect, useRef, useState } from 'react';
import { View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, BottomActionSheet } from '../../../components';

import Styles from './Styles';

import recipeDisplay from '../../../utils/data/recipeDisplay.json';


const HomeScreen = ({ navigation }) => {
  const shareSheetRef = useRef()
  const [isShareSheetActive, setIsShareSheetActive] = useState(false)
  const shareSheetSnapPoints = ['50%',]

  function onShareRecipe() {
    setIsShareSheetActive(true)
  }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.wrapper} >
        <HomeScreenHeader />
        <SearchBar navigation={navigation} />
        <MenuTypeScrollBar />
        {recipeDisplay.map(item => (
          <RecipeCard key={item.id} item={item} navigation={navigation} onShare={onShareRecipe} />
        ))}
      </ScrollView>
      <BottomActionSheet sheetRef={shareSheetRef} sheetSnapPoints={shareSheetSnapPoints} isActive={isShareSheetActive} setIsActive={setIsShareSheetActive} >
        {}
      </BottomActionSheet>
    </SafeAreaView>
  )
};


export default HomeScreen;

