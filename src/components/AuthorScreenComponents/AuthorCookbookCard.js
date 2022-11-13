import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { authorCookbookCardStyles } from './Styles';


function AuthorCookbookCard({ navigation, item, authorImg, authorName, isVerified }) {
  const rating = parseFloat(item.CookbookRatings.avgRating["$numberDecimal"])
  const ratingWhole = parseInt(Math.floor(rating))
  const ratingFraction = rating - ratingWhole
  const ratingCeil = parseInt(Math.ceil(rating))

  const [isSaved, setIsSaved] = useState(false)

  function onPressSave() {setIsSaved(prevState => !prevState)}
  
  function navigateToCookbookDetails(){
    navigation.navigate('cookbook-details', {
      cookbookId: item._id
    })
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={navigateToCookbookDetails} style={[authorCookbookCardStyles.container, ]} >
      <Image source={{ uri: item.thumbnail, scale: 1.0 }} resizeMode={'cover'} style={authorCookbookCardStyles.headerImage} />
      <View style={{ paddingHorizontal: 4 }} >
        <View style={authorCookbookCardStyles.headerContainer} >
          <Text ellipsizeMode='tail' numberOfLines={1} style={authorCookbookCardStyles.title} >{item.name}</Text>
          <Ionicons onPress={onPressSave} name={isSaved ? 'bookmark' : 'bookmark-outline'} size={15} color={AppStyles.primaryTextColor} />
        </View>
        <View style={authorCookbookCardStyles.ratingContainer} >
          {[...Array(ratingWhole).keys()].map(i => (
            <Ionicons key={i.toString()} name='star' color={'#F58549'} size={12} />
            ))}
          {(ratingFraction > 0 && ratingFraction < 1) && <Ionicons name='star-half' color={'#F58549'} size={12} />}
          {[...Array(5 - ratingCeil).keys()].map(i => (
            <Ionicons key={i.toString()} name='star-outline' color={'#F58549'} size={12} />
          ))}
          <Text style={authorCookbookCardStyles.ratingCount} >{item.CookbookRatings.ratingCount}</Text>
        </View>
        <View style={authorCookbookCardStyles.authorContainer} >
          <View style={authorCookbookCardStyles.author} >
            <Image source={{ uri: authorImg, scale: 1.0 }} resizeMode={'cover'} style={authorCookbookCardStyles.authorImg} />
            <Text style={authorCookbookCardStyles.authorName} ellipsizeMode={'tail'} numberOfLines={1} >{authorName}</Text>
          </View>
          {isVerified ? <Ionicons name='checkmark-done-circle' size={15} color={AppStyles.primaryColor} /> : null}
        </View>
      </View>
    </TouchableOpacity>
  )
};


export default AuthorCookbookCard;

