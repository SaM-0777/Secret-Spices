import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AccountBox, AccountField, AccountLinks, BottomActionSheet, CustomLoading, RetryBox } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function AccountScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [userAccount, setUserAccount] = useState({})
  const [options, setOptions] = useState(["instagram", "youtube",])
  const [selectedOptions, setSelectedOptions] = useState([])

  const linksSheetRef = useRef()
  const [isLinksSheetActive, setIsLinksSheetActive] = useState(false)
  const linksSheetSnapPoints = ['30%',]

  function onPressLinksSheet () { setIsLinksSheetActive(true) }

  function onPressSocialItem(item) {
    setIsLinksSheetActive(false)
    setSelectedOptions([...selectedOptions, item])
  }

  useEffect(() => {
    setOptions(options.filter(item => !selectedOptions.includes(item)))
    return () => {}
  }, [selectedOptions])

  function onPressGoBack() { navigation.goBack() }
  function onPressRetry() { }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <CustomLoading />
        :
        <>
          {userAccount ? 
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.wrapper} >
              <Ionicons onPress={onPressGoBack} name='chevron-back' size={25} color={AppStyles.primaryTextColor} />
              <AccountBox />
              <View style={Styles.fieldContainer} >
                <AccountField label={'Username'} focused />
                <AccountField label={'Bio'} />
                <AccountLinks len={2} data={selectedOptions} onPress={onPressLinksSheet} />
              </View>
            </ScrollView>
            :
            <RetryBox onPress={onPressRetry} />
          }
        </>
      }
      <Portal>
        <BottomActionSheet sheetRef={linksSheetRef} sheetSnapPoints={linksSheetSnapPoints} isActive={isLinksSheetActive} setIsActive={setIsLinksSheetActive} >
          <BottomSheetView style={Styles.bottomSheetContainer} >
            <Text style={Styles.bottomSheetHeader} >Select a link type</Text>
            {options.map((item, i) => (
              <TouchableOpacity key={i.toString()} activeOpacity={0.85} onPress={() => onPressSocialItem(item)} style={Styles.bottomSheetButton} >
                <Ionicons name={`logo-${options[i]}`} size={22} color={AppStyles.primaryTextColor} style={{ marginRight: 10 }} />
                <Text style={Styles.bottomSheetItemText} >{item}</Text>
              </TouchableOpacity>
            ))}
          </BottomSheetView>
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
}


export default AccountScreen;

