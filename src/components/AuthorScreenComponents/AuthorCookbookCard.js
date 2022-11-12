import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { authorCookbookCardStyles } from './Styles';


function AuthorCookbookCard({ navigation, item, authorImg, authorName, isVerified }) {
  const rating = parseFloat(item.CookbookRatings.avgRating["$numberDecimal"])
  const ratingWhole = parseInt(Math.floor(rating))
  const ratingFraction = rating - ratingWhole
  const ratingCeil = parseInt(Math.ceil(rating))
  
  function navigateToCookbookDetails(){
    navigation.navigate('cookbook-details', {
      cookbookId: item._id
    })
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={navigateToCookbookDetails} style={[authorCookbookCardStyles.container, ]} >
      <Image source={{ uri: item.thumbnail, scale: 1.0 }} resizeMode={'cover'} style={authorCookbookCardStyles.headerImage} />
      <View style={{ paddingHorizontal: 4 }} >
        <Text ellipsizeMode='tail' numberOfLines={1} style={authorCookbookCardStyles.title} >{item.name}</Text>
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
          <Image source={{ uri: authorImg, scale: 1.0 }} resizeMode={'cover'} style={authorCookbookCardStyles.authorImg} />
          <Text style={authorCookbookCardStyles.authorName} >{authorName}</Text>
          {isVerified ? <Ionicons name='checkmark-done-circle' size={15} color={AppStyles.primaryColor} /> : null}
        </View>
      </View>
    </TouchableOpacity>
  )
};


export default AuthorCookbookCard;

