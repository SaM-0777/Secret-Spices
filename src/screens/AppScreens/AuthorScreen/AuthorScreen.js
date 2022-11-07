import React, { useState, useRef } from 'react';
import { View, StatusBar } from 'react-native';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthorScreenHeader, BottomActionSheet } from '../../../components';

import Styles from './Styles';


function AuthorScreen ({ navigation }) {
  const moreSheetRef = useRef()
  const [isMoreSheetActive, setIsMoreSheetActive] = useState(false)
  const moreSheetSnapPoints = ['50%',]

  function onPressMore() {
    setIsMoreSheetActive(true)
  }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <AuthorScreenHeader navigation={navigation} onPressMore={onPressMore} />
      </View>
      <Portal>
        <BottomActionSheet sheetRef={moreSheetRef} sheetSnapPoints={moreSheetSnapPoints} isActive={isMoreSheetActive} setIsActive={setIsMoreSheetActive} >
          {}
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default AuthorScreen;

