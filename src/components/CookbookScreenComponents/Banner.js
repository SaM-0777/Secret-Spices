import React from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { bannerStyle } from './Styles';


function Banner ({ thumbnail, name, authorName }) {
  return (
    <View style={bannerStyle.container} >
      <ImageBackground source={require('../../../assets/images/recipe-thumbnail-3.jpg')} resizeMode={'cover'} blurRadius={100} style={bannerStyle.backgroundImage} >
        <View style={bannerStyle.wrapper} >
          <Image source={require('../../../assets/images/recipe-thumbnail-3.jpg')} resizeMode={'cover'} style={bannerStyle.thumbnail} />
          <Text style={bannerStyle.title} >{name || "Meals on Demand"}</Text>
          <Text style={bannerStyle.authorName} >{authorName || "Emma Geller"}</Text>
          <View style={bannerStyle.ratingContainer} >
            {[...Array(5).keys()].map(i => (
              <Ionicons key={i.toString()} name='star' size={15} color={'#F58549'} style={ i !== 0 ? { marginLeft: 4, } : {}} />
            ))}
            <TouchableOpacity activeOpacity={0.8} onPress >
              <Text style={bannerStyle.rating} >5,835 Ratings</Text>
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

