import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import AppStyles from '../../AppStyles';
import { recipeCardStyles } from './Styles';


function RecipeCard({ navigation, item }) {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.navigate('recipe-details', { recipeId: item._id })} style={recipeCardStyles.container} >
      <Image source={{ uri: item.thumbnail, scale: 1.0 }} resizeMode={'cover'} style={recipeCardStyles.thumbnail} />
      <View style={recipeCardStyles.infoWrapper} >
        <View style={recipeCardStyles.categoryContainer} >
          <View style={recipeCardStyles.categoryTextContainer} >
            <View style={recipeCardStyles.bar} />
            <Text style={recipeCardStyles.categoryText} >Mexican</Text>
          </View>
          <Ionicons name='bookmark' size={20} color={AppStyles.primaryTextColor} />
        </View>
        <Text style={recipeCardStyles.title} ellipsizeMode="tail" numberOfLines={1} >{item.title}</Text>
        <View style={recipeCardStyles.ratingsWrapper} >
          <Text style={recipeCardStyles.viewText} >{item.likes} Likes</Text>
        </View>
        <View style={recipeCardStyles.footerContainer} >
          <View style={recipeCardStyles.authorContainer} >
            <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={recipeCardStyles.authorImg} />
            <Text style={recipeCardStyles.authorName} >Emma Geller</Text>
            <Ionicons name='checkmark-done-circle' size={18} color={AppStyles.primaryColor} />
          </View>
          <View style={recipeCardStyles.durationContainer} >
            <Ionicons name='alarm-outline' size={20} color={AppStyles.secondaryTextColor} />
            <Text style={recipeCardStyles.durationText} >{moment.utc(item.duration * 1000).format('mm:ss')} min</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};


export default RecipeCard;

