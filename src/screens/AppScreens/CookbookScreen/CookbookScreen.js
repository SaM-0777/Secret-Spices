import React, { useState, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';

import { CookbookScreenHeader, Banner, BottomActionSheet } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function CookbookScreen({ route, navigation }) {
  const { cookbookId } = route?.params
  const actionSheetRef = useRef()
  const [isActionSheetActive, setIsActionSheetActive] = useState(false)
  const actionSheetSnapPoints = ['50%',]

  function onPressMore() {
    setIsActionSheetActive(true)
  }

  return (
    <SafeAreaView style={Styles.container} >
      <CookbookScreenHeader navigation={navigation} onPressMore={onPressMore} />
      <ScrollView>
        <Banner />
      </ScrollView>
      {/**
       * features to be added above
       */}
      <Portal>
        <BottomActionSheet sheetRef={actionSheetRef} sheetSnapPoints={actionSheetSnapPoints} isActive={isActionSheetActive} setIsActive={setIsActionSheetActive} >
          {}
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default CookbookScreen;

