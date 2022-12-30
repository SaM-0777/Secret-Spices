import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal, Modal } from 'react-native-paper';

import { SettingScreenHeader, SettingTab, LogoutModalContent, CustomLoading } from '../../../components';

import { logOut } from '../../../utils/auth/auth';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function SettingsScreen({ navigation }) {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  function onPressChangePassword () { navigation.navigate('change-password') }
  function onPressAccount () { navigation.navigate('user-account') }
  function onShowLogoutModal () { setIsLogoutModalVisible(true) }
  function onHideLogoutModal() { setIsLogoutModalVisible(false) }
  async function onPressLogout() { 
    setLoading(true)
    await logOut()
    // setLoading(false)
  }

  return (
    <SafeAreaView style={Styles.container} >
      {loading ? <CustomLoading /> : 
      <>
        <View style={Styles.wrapper} >
          <SettingScreenHeader navigation={navigation} />
          <SettingTab text={'Change Password'} icon='chevron-forward' onPress={onPressChangePassword} />
          {/*<SettingTab text={'Account'} icon='chevron-forward' onPress={onPressAccount} />*/}
          {/*<SettingTab text={'Language'} />*/}
          {/*<SettingTab text={'Get Help'} icon='chevron-forward' />
          <SettingTab text={'Report a Problem'} icon='chevron-forward' />
          <SettingTab text={'Terms of Use'} icon='chevron-forward' />*/}
          <SettingTab text={'Log Out'} icon='log-out-outline' onPress={onShowLogoutModal} />
        </View>
        <Portal>
          <Modal visible={isLogoutModalVisible} onDismiss={onHideLogoutModal} contentContainerStyle={Styles.modal} >
            <LogoutModalContent onPressCancel={onHideLogoutModal} onPressLogout={onPressLogout} />
          </Modal>
        </Portal>
      </>
      }
    </SafeAreaView>
  )
};


export default SettingsScreen;

