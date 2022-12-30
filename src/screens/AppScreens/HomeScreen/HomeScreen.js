import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { View, StatusBar, Text, TouchableOpacity, RefreshControl, ScrollView, FlatList, Animated, ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, RecipeHomeCardSkeleton, ShareLoadingMask, CustomLoading } from '../../../components';

import { UserContext } from '../../../Navigations/RootNavigation';

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
  const currentAWSUser = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [shareLoading, setShareLoading] = useState(false)
  const [data, setData] = useState(null)
  // const [totalActiveSkeletonOnLoadMore, setTotalActiveSkeletonOnLoadMore] = useState(0)

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

  async function getMoreDataOnScroll() {
    setLoadingMore(true)
    const response = await getHomeData()
    // console.log(response)
    setData([...data, ...response])
    setLoadingMore(false)
    /*setData([...data, ...Array(5).keys()])
    const newData = data.splice(data.length - 5, 5, response)
    setData(newData)*/
  }

  useEffect(() => {
    if (!data) getResponse()
    // getResponse()
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      {shareLoading ?
        <ShareLoadingMask />
        :
        <View style={Styles.wrapper} >
          {loading ? 
            <FlatList
              data={[...Array(15).keys()]}
              renderItem={({ item }) => <RecipeHomeCardSkeleton key={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item}
              /*onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: scrollY } } }
              ], { useNativeDriver: false })}*/
              ListHeaderComponent={loadingMore && <SearchBar navigation={navigation} />}
              scrollEventThrottle={16}
              refreshControl={< RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              // style={{ flexGrow: 1 }}
            />
            :
            <>
              {data !== null ?
                <>
                  <Animated.View style={[Styles.header, /*{ height: headerScrollHeight }*/]} >
                    {/*<HomeScreenHeader username={currentUser?.name.split(" ")[0]} profileImage={currentUser?.thumbnail} navigation={navigation} />*/}
                    {/*<SearchBar navigation={navigation} />*/}
                    {/*<MenuTypeScrollBar />*/}
                  </Animated.View>
                  <FlashList
                    data={data}
                    renderItem={({ item }) => <RecipeCard item={item} navigation={navigation} setShareLoading={setShareLoading} /> }
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => `${item._id}${index}`}
                    /*onScroll={Animated.event([
                      { nativeEvent: { contentOffset: { y: scrollY } } }
                    ], { useNativeDriver: false })}*/
                    scrollEventThrottle={16}
                    ListHeaderComponent={<SearchBar navigation={navigation} />}
                    ListFooterComponent={<CustomLoading />}
                    refreshControl={< RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={getMoreDataOnScroll}
                    estimatedItemSize={274}
                  // style={{ flexGrow: 1 }}
                  />
                </>
                :
                <View style={Styles.retryContainer} >
                  <TouchableOpacity activeOpacity={0.9} onPress={onRetry} style={Styles.retryBtn} >
                    <Ionicons name={'alert-circle-outline'} size={25} color={AppStyles.secondaryColor} />
                    <Text style={Styles.retryText} >Retry</Text>
                  </TouchableOpacity>
                </View>
              }
            </>
          }          
        </View>
      }
    </SafeAreaView>
  )
};


export default HomeScreen;


/**
 * {<ScrollView onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollOffsetY}}}], { useNativeDriver: false })} scrollEventThrottle={16} refreshControl = {
            < RefreshControl
refreshing = { refreshing }
onRefresh = { onRefresh }
  />
          } vertical contentContainerStyle = {{ paddingTop: HEADER_HEIGHT }} showsVerticalScrollIndicator = { false} >
  <SearchBar navigation={navigation} />
{
  loading ? [...Array(5).keys()].map(index => (
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
          </ScrollView >* /}
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

