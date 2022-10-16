import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';

import { EnterUsername, EnterUserNameHeader, BackButton, PrimaryButton } from '../../../components';

import AppStyles from '../../../AppStyles';
import { enterUsernameScreenStyles } from './Styles';


const EnterUsernameScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")

  const navigateBack = () => navigation.goBack()
  const handleNext = () => navigation.navigate('forgot-password-newPassword')
  
  const handleOnChangeUsername = (text) => setUsername(text)

  return (
    <View style={enterUsernameScreenStyles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={[enterUsernameScreenStyles.wrapper, { paddingTop: StatusBar.currentHeight }]} >
        <BackButton onPress={navigateBack} />
        <View style={enterUsernameScreenStyles.enterUsernameContainer} >
          <View style={enterUsernameScreenStyles.headerContainer} >
            <EnterUserNameHeader />
          </View>
          <EnterUsername handleOnChangeUsername={handleOnChangeUsername} />
          <View style={enterUsernameScreenStyles.primaryButtonContainer} >
            <PrimaryButton label={'Next'} disabled={false} onPress={handleNext} textColor={AppStyles.secondaryColor} buttonColor={AppStyles.primaryColor} />
          </View>
        </View>
      </View>
    </View>
  )
};


export default EnterUsernameScreen;

