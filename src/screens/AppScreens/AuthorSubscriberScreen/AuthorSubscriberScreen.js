import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SubscriberCard, CustomLoading, RetryBox } from '../../../components';

import { getAuthorSubscribersData } from '../../../utils/api/get';

import { UserContext } from '../../../Navigations/AppStack/AppStack';

import AppStyle from '../../../AppStyles';
import Styles from './Styles';


function AuthorSubscriberScreen({ route, navigation }) {
  const { authorId } = route?.params
  const { _id } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [subscribersDetail, setSubscriberDetail] = useState(null)
  
  function onPressBack () { navigation.goBack() }

  async function getResponse() {
    setLoading(true)
    const response = await getAuthorSubscribersData("635d032c8e5a00f0f332baae", authorId)
    setSubscriberDetail(response)
    setLoading(false)
  }

  async function onPressRetry() {
    await getResponse()
  }

  useEffect(() => {
    if (!subscribersDetail) getResponse()
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? <CustomLoading />
        :
        <>
          {subscribersDetail ?
            <View style={Styles.wrapper} >
              <Ionicons onPress={onPressBack} name='chevron-back' size={25} color={AppStyle.primaryTextColor} />
              <ScrollView>
                {subscribersDetail?.map((item, i) => (
                  <SubscriberCard key={i.toString()} item={item} navigation={navigation} />
                ))}
              </ScrollView>
            </View>
            :
            <RetryBox onPress={onPressRetry} />
          }
        </>
      }
    </SafeAreaView>
  )
};


export default AuthorSubscriberScreen;

