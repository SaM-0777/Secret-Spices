import React, { useState, useRef, useEffect, useContext } from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AccountBox, AccountField, AccountLinks, BottomActionSheet, PrimaryButton, CustomLoading, RetryBox } from '../../../components';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import { getAuthorAccountData } from '../../../utils/api/get';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function AccountScreen({ navigation }) {
  const { _id } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [userAccount, setUserAccount] = useState({})
  const [updatedFields, setUpdatedFields] = useState({})
  const [options, setOptions] = useState(["instagram", "youtube", "pinterest"])
  const [selectedOptions, setSelectedOptions] = useState([])

  const linksSheetRef = useRef()
  const [isLinksSheetActive, setIsLinksSheetActive] = useState(false)
  const linksSheetSnapPoints = ['30%',]

  function onPressLinksSheet() { setIsLinksSheetActive(true) }
  
  function onFieldsChange(target, value) {
    setUpdatedFields({...updatedFields, [target]: value})
  }

  function onPressSocialItem(item) {
    setIsLinksSheetActive(false)
    setSelectedOptions([...selectedOptions, item])
  }

  useEffect(() => {
    setOptions(options.filter(item => !selectedOptions.includes(item)))
    return () => {}
  }, [selectedOptions, setSelectedOptions])

  function onPressGoBack() { navigation.goBack() }
  function onPressRetry() { }

  function handleNext() {
    console.log(updatedFields)
  }

  async function getResponse() {
    setLoading(true)
    const response = await getAuthorAccountData(_id)
    setUserAccount(response[0])
    setLoading(false)
  }

  useEffect(() => {
    getResponse()
    return () => {}
  }, [])

  useEffect(() => {
    setSelectedOptions(() => {
      let socials = []
      userAccount?.authorSocials?.map(item => {
        socials.push(item.socialName)
      })
      return socials
    })
  }, [userAccount])

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
              <AccountBox thumbnail={userAccount?.thumbnail} />
              <View style={Styles.fieldContainer} >
                <AccountField value={userAccount?.name} label={'Username'} focused onTextChange={onFieldsChange} />
                <AccountField value={userAccount?.description?.split(" ", 1)[0]} label={'Bio'} onTextChange={onFieldsChange} />
                <AccountLinks len={3} data={userAccount?.authorSocials || []} onPress={onPressLinksSheet} onTextChange={onFieldsChange} />
              </View>
              <View style={Styles.primaryBtnContainer} >
                <PrimaryButton label={'Update'} disabled={true} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
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

