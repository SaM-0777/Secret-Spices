import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AccountBox, AccountField, CustomLoading, RetryBox } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function AccountScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [userAccount, setUserAccount] = useState({})

  function onPressGoBack () { navigation.goBack() }
  function onPressRetry () {  }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ?
        <CustomLoading />
        :
        <>
          {userAccount ? 
            <View style={Styles.wrapper} >
              <Ionicons onPress={onPressGoBack} name='chevron-back' size={25} color={AppStyles.primaryTextColor} />
              <AccountBox />
              <View style={Styles.fieldContainer} >
                <AccountField label={'Username'} focused />
                <AccountField label={'Bio'}  />
              </View>
            </View>
            :
            <RetryBox onPress={onPressRetry} />
          }
        </>
      }
    </SafeAreaView>
  )
}


export default AccountScreen;

