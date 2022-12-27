import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import Share from 'react-native-share';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';

import { recipeCardStyles } from './Styles';


const THUMBNAILURL = "https://secret-spices-media-storage64145-staging.s3.amazonaws.com/recipe-thumbnails/"

const RecipeCard = ({ item, navigation, setShareLoading }) => {
  const [recipeItem, setRecipeItem] = useState(item)
  /*const [relativeTime, setRelativeTime] = useState(() => {
    const dateTime = new Date(recipeItem?.createdAt)
    return moment(dateTime.toISOString()).fromNow()
  })*/
  
  function navigateToAuthor() {
    navigation.navigate('author', { authorId: recipeItem?.Author[0]._id })
  }
  
  function navigateToRecipe () {
    navigation.navigate('recipe-details', {
      recipeId: recipeItem._id
    })
  }

  async function onShare() {
    setShareLoading(true)
    // setIsShareSheetActive(true)
    try {
      const shareResponse = await Share.open({
        title: recipeItem.Title,
        message: `https://secret-spices-test-api-twktq52o5a-uc.a.run.app/api/user/recipe/details/${recipeItem._id}`,
      })
      // console.log(JSON.stringify(shareResponse))
    } catch (error) {
      console.log("Share Error: ", error)
    }
    setShareLoading(false)
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
      {/*<View style={recipeCardStyles.profileContainer} >
        <TouchableOpacity activeOpacity={0.85} onPress={navigateToAuthor} >
          <Image source={{ uri: recipeItem.Author[0].thumbnail , scale: 1.0 }} resizeMode={'contain'} style={recipeCardStyles.profileImage} />
        </TouchableOpacity>
        <Text style={recipeCardStyles.profileText} >{recipeItem.Author[0].name}</Text>
      </View>*/}
      <TouchableOpacity activeOpacity={0.95} onPress={navigateToRecipe} >
        <Image source={{ uri: `${THUMBNAILURL}${recipeItem.Image_Name}.jpg`, scale: 1 }} resizeMode={'cover'} style={recipeCardStyles.thumbnail} />
        {/*<View style={recipeCardStyles.durationContainer} >
          <Ionicons name={'time-outline'} size={20} color={AppStyles.primaryColor} />
          <Text style={recipeCardStyles.durationText} >{new Date(recipeItem.duration * 1000).toISOString().substr(14, 5)}</Text>
        </View>*/}
      </TouchableOpacity>
      <View style={recipeCardStyles.activityContainer} >
        <View style={recipeCardStyles.activityLeft} >
          <Text style={recipeCardStyles.title} >{recipeItem.Title}</Text>
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
      {/*<View style={recipeCardStyles.footerContainer} >
        {/**
         * Some Extra info or action to defined here.
        
        <View style={[recipeCardStyles.dot, { marginRight: 5, }]} />
        <Text style={recipeCardStyles.footerText} >{recipeItem.viewCount || 'No'} views</Text>
        <View style={[recipeCardStyles.dot, { marginHorizontal: 5, }]} />
        <Text style={recipeCardStyles.footerText} >{recipeItem.viewCount || 'No'} likes</Text>
        <View style={[recipeCardStyles.dot, { marginHorizontal: 5, }]} />
        <Text style={recipeCardStyles.footerText} >{relativeTime}</Text>
      </View>*/}
    </View>
  )
};


export default RecipeCard;

