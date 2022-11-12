import React from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { bannerStyle } from './Styles';


function Banner({ thumbnail, name, authorName, authorIsVerified, rating }) {
  const ratings = parseFloat(rating.avgRating["$numberDecimal"])
  const ratingWhole = parseInt(Math.floor(ratings))
  const ratingFraction = ratings - ratingWhole
  const ratingCeil = parseInt(Math.ceil(ratings))
  
  return (
    <View style={bannerStyle.container} >
      <ImageBackground source={{ uri: thumbnail, scale: 1.0 }} resizeMode={'cover'} blurRadius={100} style={bannerStyle.backgroundImage} >
        <View style={bannerStyle.wrapper} >
          <Image source={{ uri: thumbnail, scale: 1.0 }} resizeMode={'cover'} style={bannerStyle.thumbnail} />
          <Text style={bannerStyle.title} >{name}</Text>
          <View style={bannerStyle.authorContainer} >
            <Text style={bannerStyle.authorName} >{authorName}</Text>
            {authorIsVerified && <Ionicons name='checkmark-done-circle' size={15} color={AppStyles.primaryColor} style={{ marginLeft: 5, }} />}
          </View>
          <View style={bannerStyle.ratingContainer} >
            {[...Array(ratingWhole).keys()].map(i => (
              <Ionicons key={i.toString()} name='star' color={'#F58549'} size={12} />
            ))}
            {(ratingFraction > 0 && ratingFraction < 1) && <Ionicons name='star-half' color={'#F58549'} size={12} />}
            {[...Array(5 - ratingCeil).keys()].map(i => (
              <Ionicons key={i.toString()} name='star-outline' color={'#F58549'} size={12} />
            ))}
            <TouchableOpacity activeOpacity={0.8} >
              <Text style={bannerStyle.rating} >{rating.ratingCount} Ratings</Text>
            </TouchableOpacity>
          </View>
          <View style={bannerStyle.iconContainer} >
            <Ionicons name='bookmark-outline' size={25} color={AppStyles.primaryBackgroundColor} />
            <Ionicons name='paper-plane-outline' size={25} color={AppStyles.primaryBackgroundColor} style={{ marginLeft: 10, }} />
            <Ionicons  />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
};


export default Banner;

