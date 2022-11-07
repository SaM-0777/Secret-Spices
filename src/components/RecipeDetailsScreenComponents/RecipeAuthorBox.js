import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';

import { recipeAuthorBoxStyles } from './Styles';


function RecipeAuthorBox({ navigation, recipeDetails }) {
  const [subscribed, setSubscribed] = useState(false)
  
  function navigateToAuthor() {
    navigation.navigate('author', {
      authorId: recipeDetails?.Author[0]._id
    })
  }

  function onSubscribe() {
    if (subscribed === false) setSubscribed(true)
    else setSubscribed(false)
  }

  return (
    <View style={recipeAuthorBoxStyles.container} >
      <TouchableOpacity activeOpacity={0.9} onPress={navigateToAuthor} style={recipeAuthorBoxStyles.profileContainer} >
        <Image source={{ uri: recipeDetails?.Author[0].thumbnail, scale: 1.0 }} resizeMode={'cover'} style={recipeAuthorBoxStyles.image} />
        <Text style={recipeAuthorBoxStyles.name} >{recipeDetails?.Author[0].name}</Text>
      </TouchableOpacity>
      {/* orange tick */}
      <TouchableOpacity activeOpacity={0.9} onPress={onSubscribe} style={[recipeAuthorBoxStyles.btnContainer, subscribed ? { backgroundColor: AppStyles.primaryColor, } : { borderWidth: 1.5, borderColor: AppStyles.primaryColor }]} >
        <Text style={recipeAuthorBoxStyles.btnText} >{subscribed ? 'Subscribed' : 'Subscribe'}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default RecipeAuthorBox;

