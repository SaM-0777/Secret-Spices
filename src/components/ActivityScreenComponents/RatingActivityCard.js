import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { ratingActivityCardStyles } from './Styles';


function RatingActivityCard({ __userId, _userId, __userProfileImage, cookbookThumbnail }) {

  function onPressNavigate() {}

  return (
    <View style={ratingActivityCardStyles.container} >
      <View style={ratingActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[ratingActivityCardStyles.profileImage]} />
        <Text style={ratingActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has rated 4.5 to your cookbook. 7h</Text>
      </View>
      <TouchableOpacity onPress={onPressNavigate} activeOpacity={0.85} style={[ratingActivityCardStyles.btn]} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[ratingActivityCardStyles.btnImage]} />
      </TouchableOpacity>
    </View>
  )
};


export default RatingActivityCard;

