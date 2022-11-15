import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { ownerBoxStyles } from './Styles';


function OwnerBox({ navigation, ownerId, ownerName, ownerSubscriptionCount, ownerCookbookCount, ownerRecipeCount }) {
  

  function onPressShowSubscribers() { navigation.navigate('author-subscriber', { authorId: ownerId }) }
  /*function onPressEditProfile() { navigation.navigate('edit-profile') }
  function onPressEditProfile() { navigation.navigate('edit-profile') }*/
  function onPressEditProfile() { navigation.navigate('edit-profile') }

  return (
    <View style={ownerBoxStyles.container} >
      <Image source={require('../../../assets/images/profile-1.jpg')} resizeMode={'cover'} style={ownerBoxStyles.authorImage} />
      <Text style={ownerBoxStyles.authorName} >{ownerName || "Tony Fal"}</Text>
      <Text style={ownerBoxStyles.authorAbout} >{"Chef @KFC"}</Text>
      <View style={ownerBoxStyles.boxContainer} >
        <TouchableOpacity onPress={onPressShowSubscribers} activeOpacity={0.85} style={ownerBoxStyles.box} >
          <View style={ownerBoxStyles.dataContainer} >
            <Text style={ownerBoxStyles.boxData} >{ownerSubscriptionCount}</Text>
          </View>
          <Text style={ownerBoxStyles.boxText} >Subscribers</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={[ownerBoxStyles.box, { marginHorizontal: 25, }]} >
          <View style={ownerBoxStyles.dataContainer} >
            <Text style={ownerBoxStyles.boxData} >{ownerCookbookCount}</Text>
          </View>
          <Text style={ownerBoxStyles.boxText} >Cookbooks</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={ownerBoxStyles.box} >
          <View style={ownerBoxStyles.dataContainer} >
            <Text style={ownerBoxStyles.boxData} >{ownerRecipeCount}</Text>
          </View>
          <Text style={ownerBoxStyles.boxText} >Recipes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={onPressEditProfile} style={[ownerBoxStyles.actionContainer]} >
        <Text style={ownerBoxStyles.btnText} >Edit profile</Text>
      </TouchableOpacity>
      {/*<View style={authorBoxStyles.actionContainer} >
      </View>*/}
    </View>
  )
};


export default OwnerBox;

