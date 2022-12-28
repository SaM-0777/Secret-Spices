import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { View, StatusBar, Text, TouchableOpacity, RefreshControl, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, RecipeHomeCardSkeleton, ShareLoadingMask, } from '../../../components';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import { getHomeData } from "../../../utils/api";

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const HomeScreen = ({ navigation }) => {
  const HEADER_HEIGHT = 180
  const scrollOffsetY = useRef(new Animated.Value(0)).current
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  })
  const currentUser = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [shareLoading, setShareLoading] = useState(false)
  const [data, setData] = useState(null)

  async function getResponse() {
    setLoading(true)
    const response = await getHomeData()
    setData(response)
    // console.log(response)
    setLoading(false)
  }

  function onRetry() { getResponse() }
  // function onRefresh() { getResponse() }

  const onRefresh = React.useCallback(async function() {
    setRefreshing(true)
    // await getResponse()
    const response = await getHomeData()
    setData(response)
    setRefreshing(false)
  }, [])

  useEffect(() => {
    if (!data) getResponse()
    // getResponse()
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      {shareLoading ?
        <ShareLoadingMask />
        :
        <View style={Styles.wrapper} >
          <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
          <Animated.View style={[Styles.header, /*{ height: headerScrollHeight }*/]} >
            {/*<HomeScreenHeader username={currentUser?.name.split(" ")[0]} profileImage={currentUser?.thumbnail} navigation={navigation} />*/}
            {/*<SearchBar navigation={navigation} />*/}
            {/*<MenuTypeScrollBar />*/}
          </Animated.View>
          <ScrollView /*onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollOffsetY}}}], { useNativeDriver: false })} scrollEventThrottle={16}*/ refreshControl={
            <RefreshControl 
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          } vertical contentContainerStyle={{ /*paddingTop: HEADER_HEIGHT*/ }} showsVerticalScrollIndicator={false} >
            <SearchBar navigation={navigation} />
            {loading ? [...Array(5).keys()].map(index => (
              <RecipeHomeCardSkeleton key={index} />
            ))
              :
              <>
                {data !== null ? data.map(item => (
                  <RecipeCard key={item._id} item={item} navigation={navigation} setShareLoading={setShareLoading} />
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
      }
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

