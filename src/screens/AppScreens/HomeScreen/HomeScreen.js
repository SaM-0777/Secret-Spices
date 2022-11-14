import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, BottomActionSheet, RecipeHomeCardSkeleton } from '../../../components';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import { getHomeData } from "../../../utils/api";

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const HomeScreen = ({ navigation }) => {
  const HEADER_HEIGHT = 180
  const currentUser = useContext(UserContext)
  const shareSheetRef = useRef()
  const [isShareSheetActive, setIsShareSheetActive] = useState(false)
  const shareSheetSnapPoints = ['50%',]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  function onShareRecipe() {
    setIsShareSheetActive(true)
  }

  async function getResponse() {
    setLoading(true)
    const response = await getHomeData()
    setData(response)
    setLoading(false)
  }

  function onRetry() {
    getResponse()
  }

  useEffect(() => {
    if (!data) getResponse()
    // getResponse()
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <View style={[Styles.header ]} >
          <HomeScreenHeader username={currentUser?.name.split(" ")[0]} profileImage={currentUser?.thumbnail} navigation={navigation} />
          <SearchBar navigation={navigation} />
          <MenuTypeScrollBar />
        </View>
        <ScrollView vertical contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
          {loading ? [...Array(5).keys()].map(index => (
            <RecipeHomeCardSkeleton key={index} />
          ))
            :
            <>
              { data !== null ? data.map(item => (
                <RecipeCard key={item._id} item={item} navigation={navigation} onShare={onShareRecipe} />
              )) : 
                <View style={Styles.retryContainer} >
                  <TouchableOpacity activeOpacity={0.9} onPress={onRetry} style={Styles.retryBtn} >
                    <Ionicons name={'alert-circle-outline'} size={25} color={AppStyles.secondaryColor} />
                    <Text style={Styles.retryText} >Retry</Text>
                  </TouchableOpacity>
                </View>
              }
            </>
          }
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

