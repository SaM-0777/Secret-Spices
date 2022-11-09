import React, { useState, useEffect, useRef, createRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, findNodeHandle, FlatList, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthorScreenHeader, AuthorBox, Tabs, AuthorRecipeCard, AuthorCookbookCard, AuthorAbout, BottomActionSheet } from '../../../components';

import { getAuthorDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function AuthorScreen({ route, navigation }) {
  const { authorId } = route?.params
  const [loading, setLoading] = useState(false)
  const [authorDetails, setAuthorDetails] = useState(null)
  const [flatListData, setFlatListData] = useState([])
  const slideRef = useRef(null)
  const moreSheetRef = useRef()
  const [isMoreSheetActive, setIsMoreSheetActive] = useState(false)
  const moreSheetSnapPoints = ['50%',]

  const scrollX = useRef(new Animated.Value(0)).current

  function onPressMore() {
    setIsMoreSheetActive(true)
  }

  async function getResponse() {
    setLoading(true)
    const response = await getAuthorDetailsData(authorId)
    setAuthorDetails(response[0])
    setLoading(false)
  }

  function onRetry() {
    getResponse()
  }

  useEffect(() => {
    if (!authorDetails) getResponse()
    // getResponse()
    return () => {}
  }, [])

  useEffect(() => {
    setFlatListData([
      { id: 1, Recipes: authorDetails?.Recipes },
      { id: 2, Cookbooks: authorDetails?.Cookbooks },
      {
        id: 3,
        About: "About",
        description: authorDetails?.description,
        socials: authorDetails?.authorSocials,
        location: authorDetails?.location,
        createdAt: authorDetails?.createdAt,
      },
    ])
    return () => {}
  }, [authorDetails])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? 
        <View style={Styles.loadingIndicatorContainer} >
          <ActivityIndicator color={AppStyles.primaryColor} size={'large'} />
        </View>
      :
        <ScrollView contentContainerStyle={{  }} showsVerticalScrollIndicator={false} >
          { authorDetails !== null ?
            <View style={Styles.wrapper} >
              <AuthorScreenHeader author={authorDetails?.name} isVerified={authorDetails?.isVerified} navigation={navigation} onPressMore={onPressMore} />
              <AuthorBox authorDetails={authorDetails} />
              <View style={[Styles.authorPostsContainer, {  }]} >
                <Tabs scrollX={scrollX} />
                <Animated.FlatList
                  nestedScrollEnabled={true}
                  ref={slideRef}
                  data={flatListData}
                  renderItem={({ item }) => {
                    if (Object.keys(item)[1] === 'Recipes') return <AuthorRecipeCard navigation={navigation} item={item} />
                    else if (Object.keys(item)[1] === 'Cookbooks') return <AuthorCookbookCard item={item} />
                    else return <AuthorAbout item={item} />
                  }}
                  keyExtractor={item => item.id}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {useNativeDriver: false}
                  )}
                  pagingEnabled
                  bounces={false}
                  contentContainerStyle={{ width: Dimensions.get('window').width }}
                  scrollEventThrottle={32}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              {/**
               * features to be added here.
              */}
            </View>
            :
            <View style={Styles.retryContainer} >
              <TouchableOpacity activeOpacity={0.9} onPress={onRetry} style={Styles.retryBtn} >
                <Ionicons name={'alert-circle-outline'} size={25} color={AppStyles.secondaryColor} />
                <Text style={Styles.retryText} >Retry</Text>
              </TouchableOpacity>
            </View>
          }
        </ScrollView>
      }
      <Portal>
        <BottomActionSheet sheetRef={moreSheetRef} sheetSnapPoints={moreSheetSnapPoints} isActive={isMoreSheetActive} setIsActive={setIsMoreSheetActive} >
          { }
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default AuthorScreen;

