import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { authorRecipeCardStyles } from './Styles';


function AuthorRecipeCard({ navigation, item }) {
  return (
    <ScrollView style={{ width: '100%', }} contentContainerStyle={{ width: '100%', height: 0.95 * Dimensions.get('window').height, }} >
      {item.Recipes?.map((obj, i) => (
        <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.navigate('recipe-details', {recipeId: obj._id})} key={i.toString()} style={authorRecipeCardStyles.container} >
          <Image source={{ uri:obj.thumbnail }} resizeMode={'cover'} style={authorRecipeCardStyles.thumbnail} />
          <View style={authorRecipeCardStyles.infoWrapper} >
            <View style={authorRecipeCardStyles.categoryContainer} >
              <View style={authorRecipeCardStyles.categoryTextContainer} >
                <View style={authorRecipeCardStyles.bar} />
                <Text style={authorRecipeCardStyles.categoryText} >Mexican</Text>
              </View>
              <Ionicons name='bookmark' size={20} color={AppStyles.primaryTextColor} />
            </View>
            <Text style={authorRecipeCardStyles.title} >{obj.title}</Text>
            <View style={authorRecipeCardStyles.ratingsWrapper} >
              {[...Array(5).keys()].map(i => (
                <Ionicons key={i.toString()} name='star' size={14} color='#F58549' />
              ))}
              <Text style={authorRecipeCardStyles.viewText} >{obj.viewCount} Likes</Text>
            </View>
            <View style={authorRecipeCardStyles.footerContainer} >
              <View style={authorRecipeCardStyles.authorContainer} >
                <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={authorRecipeCardStyles.authorImg} />
                <Text style={authorRecipeCardStyles.authorName} >Emma Geller</Text>
                <Ionicons name='checkmark-done-circle' size={18} color={AppStyles.primaryColor} />
              </View>
              <View style={authorRecipeCardStyles.durationContainer} >
                <Ionicons name='alarm-outline' size={20} color={AppStyles.secondaryTextColor} />
                <Text style={authorRecipeCardStyles.durationText} >{obj.duration} secs</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
};


export default AuthorRecipeCard;

