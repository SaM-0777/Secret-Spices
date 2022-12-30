import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import Share from 'react-native-share';
import moment from 'moment';
import lodash, { debounce } from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { UserContext } from '../../Navigations/RootNavigation';

import { createSaveRecipeRequest, deleteSaveRecipeRequest } from '../../utils/api/post';

import AppStyles from '../../AppStyles';
import { recipeCardStyles } from './Styles';
import { useCallback } from 'react';


const THUMBNAILURL = "https://secret-spices-media-storage64145-staging.s3.amazonaws.com/recipe-thumbnails/"

const RecipeCard = ({ item, navigation, setShareLoading }) => {
  const currentAWSUser = useContext(UserContext)
  const [recipeItem, setRecipeItem] = useState(item)
  const [isRecipeSaved, setIsRecipeSaved] = useState(() => {
    if (item.UserSavedRecipe[0]) return true
    else return false
  })
  const [isRecipeSavedRequestMade, setIsRecipeSavedRequestMade] = useState(false)
  /*const [relativeTime, setRelativeTime] = useState(() => {
    const dateTime = new Date(recipeItem?.createdAt)
    return moment(dateTime.toISOString()).fromNow()
  })*/

  /*useEffect(() => {
    console.log(currentAWSUser)
    return () => {}
  }, [])*/
  
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

  async function makeCreateUserBookmarkRecipeRequest() {
    const userIdToken = currentAWSUser.signInUserSession.idToken.jwtToken
    const userId = currentAWSUser.username
    const recipeId = item._id
    /*console.log(userIdToken)
    console.log(userId)
    console.log(recipeId)*/
    const response = await createSaveRecipeRequest(userIdToken, userId, recipeId)
    console.log(response)
  }

  /*useEffect(() => {
    if (isRecipeSavedRequestMade === false) {
      if (isRecipeSaved) {
        makeCreateUserBookmarkRecipeRequest()
      } else {
        
      }
    }
    return () => {}
  }, [isRecipeSaved])*/

  /*const debounceMakeUserBookmarkRecipeRequest = lodash.debounce(() => makeUserBookmarkRecipeRequest, 1000)
  const throttleMakeUserBookmarkRecipeRequest = lodash.throttle(makeUserBookmarkRecipeRequest, 1000, {leading: true, trailing: false})

  const waitAfterMakingRequest = useCallback(debounce(makeUserBookmarkRecipeRequest, 1000), [])
*/
  function onBookmark() {
    setIsRecipeSaved(prevState => !prevState)
    // makeUserBookmarkRecipeRequest()
    /*console.log("Request to be made")
    waitAfterMakingRequest()*/
    // debounceMakeUserBookmarkRecipeRequest()
    /*if (!isRecipeSavedRequestMade) makeUserBookmarkRecipeRequest()

    setInterval(toggleIsRequestMade, 1000)*/
    
    /*if (recipeItem?.saved) {
      setRecipeItem({ ...recipeItem, "saved": false })
      ToastAndroid.show('Unsaved', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
    else {
      setRecipeItem({ ...recipeItem, "saved": true })
      ToastAndroid.show('Saved', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }*/
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
          {/*<TouchableOpacity activeOpacity={0.9} onPress={onShare} style={recipeCardStyles.sharebtn} >
            <Ionicons name={'paper-plane-outline'} size={22} color={AppStyles.primaryTextColor} />
          </TouchableOpacity>*/}
          {/*<TouchableOpacity activeOpacity={0.9} onPress={onBookmark} >
            <Ionicons name={isRecipeSaved ? 'bookmark' : 'bookmark-outline'} size={22} color={AppStyles.primaryTextColor} />
          </TouchableOpacity>*/}
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

