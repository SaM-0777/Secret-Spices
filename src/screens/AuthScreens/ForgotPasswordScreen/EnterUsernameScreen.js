import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native';

import { forgotPassword } from '../../../utils/auth/auth';

import { EnterUsername, Header, BackButton, PrimaryButton } from '../../../components';

import AppStyles from '../../../AppStyles';
import { enterUsernameScreenStyles } from './Styles';


const EnterUsernameScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")

  const navigateBack = () => navigation.goBack()

  const failureCallBack = (message) => {
    setLoading(false)
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER)
  }

  const successCallBack = (data) => {
    navigation.navigate('forgot-password-newPassword', { username })
    setLoading(false)
  }

  const handleNext = async () => {
    setLoading(true)
    await forgotPassword(username, successCallBack, failureCallBack)
  }
  
  const handleOnChangeUsername = (text) => setUsername(text)

  return (
    <View style={enterUsernameScreenStyles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <>
          <View style={enterUsernameScreenStyles.loadingOverlay} />
          <ActivityIndicator size={"large"} color={AppStyles.primaryColor} style={enterUsernameScreenStyles.loadingIndicator} />
        </>
        :
        null
      }
      <View style={[enterUsernameScreenStyles.wrapper, { paddingTop: StatusBar.currentHeight }]} >
        <BackButton onPress={navigateBack} />
        <View style={enterUsernameScreenStyles.enterUsernameContainer} >
          <View style={enterUsernameScreenStyles.headerContainer} >
            <Header header={"Forgot Password"} subHeader={"Tell use more about your account."} />
          </View>
          <EnterUsername editable={true} handleOnChangeUsername={handleOnChangeUsername} />
          <View style={enterUsernameScreenStyles.primaryButtonContainer} >
            <PrimaryButton label={'Next'} disabled={!(username)} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </View>
    </View>
  )
};


export default EnterUsernameScreen;

