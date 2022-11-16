import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native';

import { Header, BackButton, PrimaryButton, Username, EnterCode, EnterNewPassword } from '../../../components';

import { forgotPasswordSubmit } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import { enterNewPasswordScreenStyles } from './Styles';


function EnterNewPasswordScreen ({ route, navigation }) {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState(route?.params?.username)
  const [newAttributes, setNewAttributes] = useState({code: "", newPassword: ""})
  
  const navigateBack = () => navigation.goBack()

  const handleOnAttributesChange = (target, value) => setNewAttributes({ ...newAttributes, [target]: value })
  
  const failureCallBack = (message) => {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  const successCallBack = (data) => {
    navigation.navigate('login')
    setLoading(false)
  }

  const handleNext = async () => {
    setLoading(true)
    await forgotPasswordSubmit({ username, code: newAttributes.code, newPassword: newAttributes.newPassword }, successCallBack, failureCallBack)
    setLoading(false)
  }

  return (
    <View style={enterNewPasswordScreenStyles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={enterNewPasswordScreenStyles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={enterNewPasswordScreenStyles.loadingIndicator} />
        </>
        :
        null
      }
      <View style={[enterNewPasswordScreenStyles.wrapper, { paddingTop: StatusBar.currentHeight }]} >
        <BackButton onPress={navigateBack} />
        <View style={enterNewPasswordScreenStyles.headerContainer} >
          <Header header={"Welcome"} subHeader={"Sign in to explore the world of food."} />
        </View>
        <Username email={username} />
        <EnterCode editable={!loading} handleOnAttributesChange={handleOnAttributesChange} />
        <EnterNewPassword editable={!loading} handleOnAttributesChange={handleOnAttributesChange} />
        <View style={enterNewPasswordScreenStyles.primaryButtonContainer} >
          <PrimaryButton label={'Next'} disabled={false} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
        </View>
      </View>
    </View>
  )
};


export default EnterNewPasswordScreen;

