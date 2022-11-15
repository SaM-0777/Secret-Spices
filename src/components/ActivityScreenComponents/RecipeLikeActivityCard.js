import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { recipeLikeActivityCardStyles } from './Styles';


function RecipeLikeActivityCard({ }) {
  
  function onPressNavigate() { }

  return (
    <View style={recipeLikeActivityCardStyles.container} >
      <View style={recipeLikeActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[recipeLikeActivityCardStyles.profileImage]} />
        <Text style={recipeLikeActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has liked your Recipe. 10h</Text>
      </View>
      <TouchableOpacity onPress={onPressNavigate} activeOpacity={0.85} style={[recipeLikeActivityCardStyles.btn]} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[recipeLikeActivityCardStyles.btnImage]} />
      </TouchableOpacity>
    </View>
  )
};


export default RecipeLikeActivityCard;

