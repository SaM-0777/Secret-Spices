import React, { useState, useEffect, useRef, createRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthorScreenHeader, AuthorBox, AuthorRecipeCard, Tabs, AuthorCookbookCard, AuthorAbout, BottomActionSheet } from '../../../components';

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
    // if (!authorDetails) getResponse()
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
        <>
          { authorDetails ?
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} >
              <View style={Styles.wrapper} >
                <View style={Styles.headerContainer} >
                  <AuthorScreenHeader author={authorDetails?.name} isVerified={authorDetails?.isVerified} navigation={navigation} onPressMore={onPressMore} />
                  <AuthorBox navigation={navigation} authorDetails={authorDetails} />
                </View>
                <Tabs />
                <ScrollView nestedScrollEnabled horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: Dimensions.get('window').height }} >
                  <>
                    {authorDetails?.Cookbooks.length === 0 ?
                      <View style={Styles.emptyDataContainer} >
                        <Text style={Styles.noDataText} >No Cookbooks yet</Text>
                      </View>
                      :
                      <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between', }}
                        nestedScrollEnabled
                        data={authorDetails?.Cookbooks}
                        keyExtractor={item => item._id}
                        renderItem={({ item, index }) => <AuthorCookbookCard item={item} authorImg={authorDetails.thumbnail} authorName={authorDetails.name} isVerified={authorDetails.isVerified} navigation={navigation} />}
                        contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }}
                      />
                    }
                  </>
                  <>
                    {authorDetails?.Recipes.length === 0 ?
                      <View style={Styles.emptyDataContainer} >
                        <Text style={Styles.noDataText} >No Recipes yet</Text>
                      </View>
                      :
                      <FlatList
                        nestedScrollEnabled
                        data={authorDetails?.Recipes}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => <AuthorRecipeCard navigation={navigation} item={item} />}
                        contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12 }}
                      />
                    }
                  </>
                  <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }} >
                    <AuthorAbout description={authorDetails?.description} authSocials={authorDetails?.authSocials} />
                  </View>
                </ScrollView>
                {/**
                  * features to be added here.
                */}
              </View >
            </ScrollView>
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
      <Portal>
        <BottomActionSheet sheetRef={moreSheetRef} sheetSnapPoints={moreSheetSnapPoints} isActive={isMoreSheetActive} setIsActive={setIsMoreSheetActive} >
          { }
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default AuthorScreen;



/**
 * 
 
 */