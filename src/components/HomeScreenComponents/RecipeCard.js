import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyles from '../../AppStyles';

import { recipeCardStyles } from './Styles';


const RecipeCard = ({ item, navigation, onShare }) => {
  const [recipeItem, setRecipeItem] = useState(item)
  
  function navigateToAuthor() {
    // navigation.navigate()
  }
  
  function navigateToRecipe () {
    // navigation.navigate()
  }

  function onBookmark() {
    if (recipeItem?.saved) {
      setRecipeItem({ ...recipeItem, "saved": false })
      ToastAndroid.show('Unsaved', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
    else {
      setRecipeItem({ ...recipeItem, "saved": true })
      ToastAndroid.show('Saved', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
  }

  return (
    <View style={recipeCardStyles.container} >
      <View style={recipeCardStyles.profileContainer} >
        <TouchableOpacity activeOpacity={0.85} onPress={navigateToAuthor} >
          <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={recipeCardStyles.profileImage} />
        </TouchableOpacity>
        <Text style={recipeCardStyles.profileText} >{item.author}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.95} onPress={navigateToRecipe} >
        <Image source={require('../../../assets/images/recipe-thumbnail-1.jpg')} resizeMode={'cover'} style={recipeCardStyles.thumbnail} />
        <View style={recipeCardStyles.durationContainer} >
          <Ionicons name={'time-outline'} size={20} color={AppStyles.primaryColor} />
          <Text style={recipeCardStyles.durationText} >{recipeItem.duration}</Text>
        </View>
      </TouchableOpacity>
      <View style={recipeCardStyles.activityContainer} >
        <View style={recipeCardStyles.activityLeft} >
          {[...Array(5).keys()].map(index => (
            <Ionicons key={index} name={'star'} color={'#F58549'} size={18} />
          ))}
          <Text style={recipeCardStyles.ratingCount} >{item.Ratings.ratingCount}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={onBookmark} style={recipeCardStyles.activityRight} >
          <TouchableOpacity activeOpacity={0.9} onPress={onShare} style={recipeCardStyles.sharebtn} >
            <Ionicons name={'paper-plane-outline'} size={22} color={AppStyles.primaryTextColor} />
          </TouchableOpacity>
          <Ionicons name={recipeItem.saved ? 'bookmark' : 'bookmark-outline'} size={22} color={AppStyles.primaryTextColor} />
        </TouchableOpacity>
      </View>
      <Text style={recipeCardStyles} >{recipeItem.likeCount} likes</Text>
      <View style={recipeCardStyles.footerContainer} >
        <Text style={recipeCardStyles.title} >{recipeItem.title}</Text>
        {/**
         * Some Extra info or action to defined here.
         */}
      </View>
    </View>
  )
};


export default RecipeCard;

