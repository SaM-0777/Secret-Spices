import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { subscriberCardStyles } from './Styles';


function SubscriberCard({ item, navigation }) {
  const [isSubscribed, setIsSubscribed] = useState(item.SubscribedAuthors[0].UserSubbedAuthors.length > 0)

  function onPressOnProfile() { navigation.navigate('') }
  function onPressSubscribe() {
    setIsSubscribed(prevState => !prevState)
  }

  return (
    <View style={subscriberCardStyles.container} >
      <TouchableOpacity style={subscriberCardStyles.profileContainer} >
        <Image source={{ uri: item.SubscribedAuthors[0].thumbnail }} resizeMode='cover' style={subscriberCardStyles.profileImage} />
        <View style={subscriberCardStyles.textContainer} >
          <Text style={subscriberCardStyles.name} >{item.SubscribedAuthors[0].name}</Text>
          {/*{item.SubscribedAuthors[0].UserSubbedAuthors.length > 0 && <Text style={subscriberCardStyles.infoText} >Subscribed you</Text>}*/}
        </View>
      </TouchableOpacity>
      <View style={subscriberCardStyles.btnContainer} >
        <TouchableOpacity onPress={onPressSubscribe} activeOpacity={0.85} style={[subscriberCardStyles.subBtn, isSubscribed ? { backgroundColor: '#E5E5E5' } : { backgroundColor: AppStyles.primaryColor } ]} >
          <Text style={[subscriberCardStyles.subText, isSubscribed ? { color: AppStyles.primaryTextColor,  } : {  } ]} >{isSubscribed ? 'Subscribed' : 'Subscribe'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubscriberCard;
