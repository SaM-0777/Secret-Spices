import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { recipeCommentActivityCardStyles } from './Styles';


function RecipeCommentActivity({ }) {
  
  function onPressNavigate() { }

  return (
    <View style={recipeCommentActivityCardStyles.container} >
      <View style={recipeCommentActivityCardStyles.profileContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[recipeCommentActivityCardStyles.profileImage]} />
        <Text style={recipeCommentActivityCardStyles.profileText} ><Text style={{ fontFamily: AppStyles.primaryFontFamilyBold }} >Dreamy Chicken</Text> has commented on your Recipe. 10h</Text>
      </View>
      <TouchableOpacity onPress={onPressNavigate} activeOpacity={0.85} style={[recipeCommentActivityCardStyles.btn]} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode='cover' style={[recipeCommentActivityCardStyles.btnImage]} />
      </TouchableOpacity>
    </View>
  )
};


export default RecipeCommentActivity;

