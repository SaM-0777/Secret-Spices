import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CookbookScreenHeader, Banner, CookbookRecipeCard, BottomActionSheet } from '../../../components';

import { getCookbookDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function CookbookScreen({ route, navigation }) {
  const { cookbookId } = route?.params
  const [loading, setLoading] = useState(false)
  const [cookbookDetailsData, setCookbookDetailsData] = useState(null)
  const actionSheetRef = useRef()
  const [isActionSheetActive, setIsActionSheetActive] = useState(false)
  const actionSheetSnapPoints = ['50%',]

  function onPressMore() {
    setIsActionSheetActive(true)
  }

  async function getResponse() {
    setLoading(true)
    const response = await getCookbookDetailsData(cookbookId)
    setCookbookDetailsData(response[0])
    setLoading(false)
  }

  function onRetry() {
    getResponse()
  }

  useEffect(() => {
    if (!cookbookDetailsData) getResponse()
    return () => {}
  }, []);

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? 
        <View style={Styles.loadingIndicatorContainer} >
          <ActivityIndicator color={AppStyles.primaryColor} size={'large'} />
        </View>
      :
        <>
          {cookbookDetailsData ?
            <>
              <CookbookScreenHeader navigation={navigation} onPressMore={onPressMore} />
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20, }} >
                <View style={{ flex: 0.4 }} >
                  <Banner thumbnail={cookbookDetailsData?.thumbnail} name={cookbookDetailsData?.name} authorName={cookbookDetailsData?.Author[0].name} authorIsVerified={cookbookDetailsData?.Author[0].isVerified} rating={cookbookDetailsData?.CookbookRating} />
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 12, }} >
                  {cookbookDetailsData?.Recipes.length === 0 ?
                    <View style={Styles.emptyRecipeContainer} >
                      <Text style={Styles.emptyRecipeText} >No Recipes yet.</Text>
                    </View>
                  :
                    <View style={{ flex: 0.6 }} >
                      {cookbookDetailsData?.Recipes.map((item, i) => (
                        <CookbookRecipeCard key={i.toString()} item={item} navigation={navigation}  />
                      ))}
                    </View>
                  }
                </View>
              </ScrollView>
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
      <Portal>
        <BottomActionSheet sheetRef={actionSheetRef} sheetSnapPoints={actionSheetSnapPoints} isActive={isActionSheetActive} setIsActive={setIsActionSheetActive} >
          {}
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default CookbookScreen;

