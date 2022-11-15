import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Portal } from '@gorhom/portal';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ActivityScreenHeader,
  SubscriptionActivityCard,
  RatingActivityCard,
  CustomLoading,
  RetryBox,
  BottomActionSheet,
  RecipeLikeActivityCard,
  RecipeCommentActivity,
  CommentLikeActivity,
  CommentReplyActivity,
} from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function ActivityScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [userActivityData, setUserActivityData] = useState({})
  
  const settingsSheetRef = useRef()
  const [isSettingSheetActive, setIsSettingSheetActive] = useState(false)
  const settingsSheetSnapPoints = ['50%',]

  function onPressSettings () { setIsSettingSheetActive(true) }

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {loading ? <CustomLoading />
        :
        <>
          {userActivityData ?
            <View style={Styles.wrapper} >
              <ActivityScreenHeader navigation={navigation} onPressSettings={onPressSettings} />
              <ScrollView>
                <SubscriptionActivityCard />
                <RatingActivityCard />
                <RecipeLikeActivityCard />
                <RecipeCommentActivity />
                <CommentLikeActivity />
                <CommentReplyActivity />
              </ScrollView>
            </View>
          :
            <RetryBox />
          }
        </>
      }
      <Portal>
        <BottomActionSheet sheetRef={settingsSheetRef} sheetSnapPoints={settingsSheetSnapPoints} isActive={isSettingSheetActive} setIsActive={setIsSettingSheetActive} >
          {}
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default ActivityScreen;

