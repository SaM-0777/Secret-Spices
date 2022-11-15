import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { commentLikeActivityCardStyles } from './Styles';


function CommentLikeActivity({ }) {
  
  function onPressNavigate() { }
  
  return (
    <View style={commentLikeActivityCardStyles.container} >
      <View style={commentLikeActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[commentLikeActivityCardStyles.profileImage]} />
        <Text style={commentLikeActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has liked your Comment. 10h</Text>
      </View>
      <TouchableOpacity onPress={onPressNavigate} activeOpacity={0.85} style={[commentLikeActivityCardStyles.btn]} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[commentLikeActivityCardStyles.btnImage]} />
      </TouchableOpacity>
    </View>
  )
};


export default CommentLikeActivity;

