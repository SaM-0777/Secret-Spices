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
          <Image source={{ uri: recipeItem.Author[0].thumbnail , scale: 1.0 }} resizeMode={'contain'} style={recipeCardStyles.profileImage} />
        </TouchableOpacity>
        <Text style={recipeCardStyles.profileText} >{recipeItem.Author[0].name}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.95} onPress={navigateToRecipe} >
        <Image source={{ uri: recipeItem.thumbnail, scale: 1 }} resizeMode={'cover'} style={recipeCardStyles.thumbnail} />
        <View style={recipeCardStyles.durationContainer} >
          <Ionicons name={'time-outline'} size={20} color={AppStyles.primaryColor} />
          <Text style={recipeCardStyles.durationText} >{new Date(recipeItem.duration * 1000).toISOString().substr(14, 5)}</Text>
        </View>
      </TouchableOpacity>
      <View style={recipeCardStyles.activityContainer} >
        <View style={recipeCardStyles.activityLeft} >
          {[...Array(5).keys()].map(index => (
            <Ionicons key={index} name={'star'} color={'#F58549'} size={18} />
          ))}
          <Text style={recipeCardStyles.ratingCount} >{item.Ratings.ratingCount}</Text>
        </View>
        <View style={recipeCardStyles.activityRight} >
          <TouchableOpacity activeOpacity={0.9} onPress={onShare} style={recipeCardStyles.sharebtn} >
            <Ionicons name={'paper-plane-outline'} size={22} color={AppStyles.primaryTextColor} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={onBookmark} >
            <Ionicons name={recipeItem.saved ? 'bookmark' : 'bookmark-outline'} size={22} color={AppStyles.primaryTextColor} />
          </TouchableOpacity>
        </View>
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

