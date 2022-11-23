import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native';
import Share from 'react-native-share';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard, RecipeHomeCardSkeleton, ShareLoadingMask, } from '../../../components';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import { getHomeData } from "../../../utils/api";

import Styles from './Styles';
import AppStyles from '../../../AppStyles';


const HomeScreen = ({ navigation }) => {
  const HEADER_HEIGHT = 180
  const currentUser = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [shareLoading, setShareLoading] = useState(false)
  const [data, setData] = useState(null)

  async function onShareRecipe(item) {
    
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
      {shareLoading ?
        <ShareLoadingMask />
        :
        <View style={Styles.wrapper} >
          <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
          <View style={[Styles.header]} >
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

