import React, { useState, useEffect, useRef, createRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, findNodeHandle, FlatList, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthorScreenHeader, AuthorBox, AuthorRecipeCard, AuthorCookbookCard, AuthorAbout, BottomActionSheet } from '../../../components';

import { getAuthorDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function AuthorScreen({ route, navigation }) {
  const { authorId } = route?.params
  const [loading, setLoading] = useState(false)
  const [authorDetails, setAuthorDetails] = useState(null)
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

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? 
        <View style={Styles.loadingIndicatorContainer} >
          <ActivityIndicator color={AppStyles.primaryColor} size={'large'} />
        </View>
      :
        <ScrollView nestedScrollEnabled >
          { authorDetails !== null ?
            <View style={Styles.wrapper} >
              <View style={Styles.headerContainer} >
                <AuthorScreenHeader author={authorDetails?.name} isVerified={authorDetails?.isVerified} navigation={navigation} onPressMore={onPressMore} />
                <AuthorBox authorDetails={authorDetails} />
              </View>
              <ScrollView nestedScrollEnabled horizontal pagingEnabled showsHorizontalScrollIndicator={false}  >
                <FlatList
                  nestedScrollEnabled
                  data={authorDetails?.Recipes}
                  keyExtractor={item => item._id}
                  renderItem={({item}) => <AuthorRecipeCard navigation={navigation} item={item} />}
                  contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }}
                />
                <FlatList
                  nestedScrollEnabled
                  data={authorDetails?.Recipes}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => <AuthorRecipeCard item={item} />}
                  contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }}
                />
                <FlatList
                  nestedScrollEnabled
                  data={authorDetails?.Recipes}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => <AuthorRecipeCard item={item} />}
                  contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }}
                />
              </ScrollView>
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

