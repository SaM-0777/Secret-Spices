import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { authorBoxStyles } from './Styles';


function AuthorBox({ navigation, authorDetails }) {
  const [isSubscribed, setIsSubscribed] = useState(false)

  function onSubscribe() { setIsSubscribed(prevState => !prevState) }
  function onPressShowSubscribers() { navigation.navigate('author-subscriber', { authorId: authorDetails?._id }) }

  return (
    <View style={authorBoxStyles.container} >
      <Image source={{ uri: authorDetails?.thumbnail, scale: 1.0 }} resizeMode={'contain'} style={authorBoxStyles.authorImage} />
      <Text style={authorBoxStyles.authorName} >{authorDetails?.name}</Text>
      <Text style={authorBoxStyles.authorAbout} >{"Chef @KFC"}</Text>
      <View style={authorBoxStyles.boxContainer} >
        <TouchableOpacity onPress={onPressShowSubscribers} activeOpacity={0.85} style={authorBoxStyles.box} >
          <View style={authorBoxStyles.dataContainer} >
            <Text style={authorBoxStyles.boxData} >{authorDetails?.subscriptionCount}</Text>
          </View>
          <Text style={authorBoxStyles.boxText} >Subscribers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[authorBoxStyles.box, { marginHorizontal: 25, }]} >
          <View style={authorBoxStyles.dataContainer} >
            <Text style={authorBoxStyles.boxData} >{authorDetails?.cookbookCount || "N/A"}</Text>
          </View>
          <Text style={authorBoxStyles.boxText} >Cookbooks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={authorBoxStyles.box} >
          <View style={authorBoxStyles.dataContainer} >
            <Text style={authorBoxStyles.boxData} >{authorDetails?.recipeCount}</Text>
          </View>
          <Text style={authorBoxStyles.boxText} >Recipes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={onSubscribe} style={[authorBoxStyles.actionContainer, isSubscribed ? { borderRadius: 10, backgroundColor: AppStyles.primaryBackgroundColor } : { backgroundColor:AppStyles.primaryColor, borderRadius: 10, }]} >
        <Text style={authorBoxStyles.btnText} >{isSubscribed ? "Subscribed" : "Subscribe"}</Text>
      </TouchableOpacity>
      {/*<View style={authorBoxStyles.actionContainer} >
      </View>*/}
    </View>
  )
};


export default AuthorBox;
