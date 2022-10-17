import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';

import { EnterUsername, Header, BackButton, PrimaryButton } from '../../../components';

import AppStyles from '../../../AppStyles';
import { enterUsernameScreenStyles } from './Styles';


const EnterUsernameScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")

  const navigateBack = () => navigation.goBack()
  const handleNext = () => navigation.navigate('forgot-password-newPassword')
  
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
            <Header header={"Welcome"} subHeader={"Sign in to explore the world of food."} />
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

