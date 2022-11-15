import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { commentReplyActivityCardStyles } from './Styles';


function CommentReplyActivity({ }) {
  
  function onPressNavigate() { }

  return (
    <View style={commentReplyActivityCardStyles.container} >
      <View style={commentReplyActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[commentReplyActivityCardStyles.profileImage]} />
        <Text style={commentReplyActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has replied to your Comment. 10h</Text>
      </View>
      <TouchableOpacity onPress={onPressNavigate} activeOpacity={0.85} style={[commentReplyActivityCardStyles.btn]} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[commentReplyActivityCardStyles.btnImage]} />
      </TouchableOpacity>
    </View>
  )
};


export default CommentReplyActivity;

