import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OwnerScreenHeader, OwnerBox, OwnerScreenTabs, OwnerAbout, CustomLoading, RetryBox, EmptyListMessageBox, BottomActionSheet } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function OwnerScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false)
  const [ownerDetails, setOwnerDetails] = useState([])

  const moreSheetRef = useRef()
  const [isMoreSheetActive, setIsMoreSheetActive] = useState(false)
  const moreSheetSnapPoints = ['50%',]

  const createSheetRef = useRef()
  const [isCreateSheetActive, setIsCreateSheetActive] = useState(false)
  const createSheetSnapPoints = ['50%',]

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
                  <OwnerScreenHeader navigation={navigation} author={'Tony Fal'} onPressCreate={onPressCreate} onPressMore={onPressMore} isVerified />
                  <OwnerBox owner={{}} navigation={navigation} />
                </View>
                <OwnerScreenTabs />
                <ScrollView nestedScrollEnabled horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: Dimensions.get('window').height }} >
                  <>
                    {ownerDetails?.Cookbooks?.length === 0 ?
                      <EmptyListMessageBox text="No Cookbooks yet" />
                      :
                      <FlatList />
                    }
                  </>
                  <>
                    {ownerDetails?.Recipes?.length === 0 ?
                      <EmptyListMessageBox text="No Recipes yet" />
                      :
                      <FlatList />
                    }
                  </>
                  <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 12, }} >
                    <OwnerAbout description={ownerDetails?.description} authSocials={ownerDetails?.authSocials} />
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
            :
            <RetryBox  />
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

