import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import AppStyles from '../../AppStyles';
import { subscriptionActivityCardStyles } from './Styles';


function SubscriptionActivityCard({ __userId, _userId, __userProfileImage }) {
  const [isSubscribed, setIsSubscribed] = useState(true)

  function onSubscribe () { setIsSubscribed(prevState => !prevState) }

  return (
    <View style={subscriptionActivityCardStyles.container} >
      <View style={subscriptionActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[subscriptionActivityCardStyles.profileImage]} />
        <Text style={subscriptionActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has subscribed you. 2h</Text>
      </View>
      <TouchableOpacity onPress={onSubscribe} activeOpacity={0.85} style={[subscriptionActivityCardStyles.btn, isSubscribed ? { backgroundColor: '#E5E5E5' } : { backgroundColor: AppStyles.primaryColor }]} >
        <Text style={[subscriptionActivityCardStyles.btnText, isSubscribed ? { color: AppStyles.primaryTextColor, } : {}]} >{isSubscribed ? 'Subscribed' : 'Subscribe'}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default SubscriptionActivityCard;

