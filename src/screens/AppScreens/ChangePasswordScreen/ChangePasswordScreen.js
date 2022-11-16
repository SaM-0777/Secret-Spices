import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ChangePasswordScreenHeader, NewPasswordInput, OldPasswordInput, PrimaryButton } from '../../../components';

import { changePassword } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function ChangePasswordScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [newAttributes, setNewAttributes] = useState({ oldPassword: "", newPassword: "" })

  function handleOnAttributesChange(target, value) { setNewAttributes({ ...newAttributes, [target]: value }) }

  function onPressGoBack() { navigation.goBack() }

  function passwordChangeFailureCallback(message) {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG)
  }
  function passwordChangeSuccessCallback(data) { 
    setLoading(false)
    ToastAndroid.show('Password Changed successfully', ToastAndroid.LONG)
    navigation.goBack()
  }
  
  async function handleNext() {
    setLoading(true)
    await changePassword(newAttributes, passwordChangeSuccessCallback, passwordChangeFailureCallback)
    setLoading(false)
  }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={Styles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={Styles.loadingIndicator} />
        </>
        :
        null
      }
      <Ionicons onPress={onPressGoBack} name='chevron-back' size={25} color={AppStyles.primaryTextColor} style={{ marginBottom: 20, paddingHorizontal: 12 }} />
      <View style={Styles.wrapper} >
        <ChangePasswordScreenHeader />
        <View style={Styles.inputContainer} >
          <OldPasswordInput editable={!loading} handleOnAttributesChange={handleOnAttributesChange} />
          <NewPasswordInput editable={!loading} handleOnAttributesChange={handleOnAttributesChange} />
        </View>
        <PrimaryButton label={'Next'} disabled={false} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
      </View>
    </SafeAreaView>
  )
};


export default ChangePasswordScreen;

