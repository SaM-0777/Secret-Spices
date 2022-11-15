import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OwnerScreenHeader, OwnerBox, OwnerScreenTabs, OwnerAbout, AuthorCookbookCard, AuthorRecipeCard, CustomLoading, RetryBox, EmptyListMessageBox, BottomActionSheet } from '../../../components';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import { getOwnerAuthorDetailsData } from '../../../utils/api/get';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function OwnerScreen({ route, navigation }) {
  const currentUser = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [ownerDetails, setOwnerDetails] = useState(null)

  const moreSheetRef = useRef()
  const [isMoreSheetActive, setIsMoreSheetActive] = useState(false)
  const moreSheetSnapPoints = ['50%',]

  const createSheetRef = useRef()
  const [isCreateSheetActive, setIsCreateSheetActive] = useState(false)
  const createSheetSnapPoints = ['50%',]

  async function getResponse() {
    setLoading(true)
    const { userId } = currentUser
    const response = await getOwnerAuthorDetailsData(userId)
    setOwnerDetails(response[0])
    setLoading(false)
  }

  function onRetry() {
    getResponse()
  }

  useEffect(() => {
    if (!ownerDetails) getResponse()
    // getResponse()
    return () => { }
  }, [])

  function onPressMore() { setIsMoreSheetActive(true) }
  function onPressCreate() { setIsCreateSheetActive(true) }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? 
        <CustomLoading />
        :
        <>
          {ownerDetails ?
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} >
              <View style={Styles.wrapper} >
                <View style={Styles.headerContainer} >
                  <OwnerScreenHeader navigation={navigation} author={ownerDetails?.name} onPressCreate={onPressCreate} onPressMore={onPressMore} isVerified={ownerDetails?.isVerified} />
                  <OwnerBox ownerId={ownerDetails?._id} ownerName={ownerDetails?.name} ownerCookbookCount={ownerDetails?.cookbookCount} ownerRecipeCount={ownerDetails?.recipeCount} ownerSubscriptionCount={ownerDetails?.subscriptionCount} navigation={navigation} />
                </View>
                <OwnerScreenTabs />
                <ScrollView nestedScrollEnabled horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: Dimensions.get('window').height }} >
                  <>
                    {ownerDetails?.Cookbooks?.length === 0 ?
                      <EmptyListMessageBox text="No Cookbooks yet" />
                      :
                      <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between', }}
                        nestedScrollEnabled
                        data={ownerDetails?.Cookbooks}
                        keyExtractor={item => item._id}
                        renderItem={({ item, index }) => <AuthorCookbookCard item={item} authorImg={ownerDetails.thumbnail} authorName={ownerDetails.name} isVerified={ownerDetails.isVerified} navigation={navigation} />}
                        contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }}
                      />
                    }
                  </>
                  <>
                    {ownerDetails?.Recipes?.length === 0 ?
                      <EmptyListMessageBox text="No Recipes yet" />
                      :
                      <FlatList
                        nestedScrollEnabled
                        data={ownerDetails?.Recipes}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => <AuthorRecipeCard navigation={navigation} item={item || []} />}
                        contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 12 }}
                      />
                    }
                  </>
                  <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }} >
                    <OwnerAbout description={ownerDetails?.description} authSocials={ownerDetails?.authSocials} />
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
            :
            <RetryBox onPress={onRetry} />
          }
        </>
      }
      <Portal>
        <BottomActionSheet sheetRef={moreSheetRef} sheetSnapPoints={moreSheetSnapPoints} isActive={isMoreSheetActive} setIsActive={setIsMoreSheetActive} >
          {  }
        </BottomActionSheet>
      </Portal>
      <Portal>
        <BottomActionSheet sheetRef={createSheetRef} sheetSnapPoints={createSheetSnapPoints} isActive={isCreateSheetActive} setIsActive={setIsCreateSheetActive} >
          { }
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default OwnerScreen;

