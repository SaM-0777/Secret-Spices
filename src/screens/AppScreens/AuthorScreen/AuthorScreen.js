import React, { useState, useEffect, useRef, createRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, findNodeHandle, FlatList, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthorScreenHeader, AuthorBox, AuthorRecipeCard, AuthorCookbookCard, BottomActionSheet } from '../../../components';

import { getAuthorDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


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
  /*const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
    extrapolate: 'clamp',
  })*/

  useEffect(() => {
    let m = []
    data.map(item => {
      item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
        m.push({ x, y, width, height })
        if (m.length === data.length) setMeasures(m)
      })
    })
    return () => {}
  }, [measures])

  return (
    <View style={Styles.tabs} >
      <View ref={containerRef} style={Styles.tabContainer} >
        {data.map((item, index) => (
          <View ref={item.ref} style={Styles.tab} key={index.toString()} >
            <Text style={Styles.tabText} >{item.tabText}</Text>
          </View>
        ))}
      </View>
      {/*{() => {
        const inputRange = data.map((_, i) => i * width)
        const indicatorWidth = scrollX.interpolate({
          inputRange,
          outputRange: measures.map(measure => measure.width),
          extrapolate: 'clamp',
        })
      }}*/}
      {measures.length > 0 && <Animated.View style={[Styles.tabIndicator, {
        width: scrollX.interpolate({
          inputRange,
          outputRange: measures.map(measure => measure.width),
          extrapolate: 'clamp',
        }), transform: [{
          translateX: scrollX.interpolate({
            inputRange,
            outputRange: measures.map(measure => measure.x)
        })}], left: 0 }]} />}
    </View>
  )
};

function FlatListItem({ item }) {
  if (Object.keys(item)[1] === 'Recipes') {
    return (
      <View style={[Styles.flatListItemContainer, { backgroundColor: '#000' }]} >
        {item?.Recipes?.map((obj, i) => (
          <AuthorRecipeCard key={i.toString()} />
        ))}
      </View>
    )
  } else if (Object.keys(item)[1] === 'Cookbooks') {
    return (
      <View style={[Styles.flatListItemContainer, { backgroundColor: '#000' }]} >
        {item?.Cookbooks?.map((obj, i) => (
          <AuthorCookbookCard key={i.toString()} />
        ))}
      </View>
    )
  } else {
    return (
      <View style={[Styles.flatListItemContainer, { backgroundColor: '#000' }]} >
        
      </View>
    )
  }
  
};

function AuthorScreen({ route, navigation }) {
  const { authorId } = route?.params
  const [loading, setLoading] = useState(false)
  const [authorDetails, setAuthorDetails] = useState(null)
  const [flatListData, setFlatListData] = useState([])
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
    // console.log("flatListData: ", flatListData)
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
        <ScrollView>
          { authorDetails !== null ?
            <View style={Styles.wrapper} >
              <AuthorScreenHeader author={authorDetails?.name} isVerified={authorDetails?.isVerified} navigation={navigation} onPressMore={onPressMore} />
              <AuthorBox authorDetails={authorDetails} />
              <View style={Styles.authorPostsContainer} >
                <Animated.FlatList
                  data={flatListData}
                  renderItem={({ item }) => <FlatListItem item={item} />}
                  keyExtractor={item => item.id}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {useNativeDriver: false}
                  )}
                  pagingEnabled
                  bounces={false}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
                <Tabs scrollX={scrollX} />
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

