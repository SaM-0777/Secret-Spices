import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { authorCookbookCardStyles } from './Styles';


function AuthorCookbookCard({ navigation, item, index }) {
  
  function navigateToCookbookDetails(){
    navigation.navigate('cookbook-details', {
      cookbookId: item._id
    })
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={navigateToCookbookDetails} style={[authorCookbookCardStyles.container, ]} >
      <Image source={require('../../../assets/images/recipe-thumbnail-1.jpg')} resizeMode={'cover'} style={authorCookbookCardStyles.headerImage} />
      <View style={{ paddingHorizontal: 4 }} >
        <Text ellipsizeMode='tail' numberOfLines={1} style={authorCookbookCardStyles.title} >Meals on Demand</Text>
        <View style={authorCookbookCardStyles.ratingContainer} >
          {[...Array(5).keys()].map(i => (
            <Ionicons key={i.toString()} name='star' color={'#F58549'} size={12} />
          ))}
          <Text style={authorCookbookCardStyles.ratingCount} >5,283</Text>
        </View>
        <View style={authorCookbookCardStyles.authorContainer} >
          <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={authorCookbookCardStyles.authorImg} />
          <Text style={authorCookbookCardStyles.authorName} >Emma Geller</Text>
          <Ionicons name='checkmark-done-circle' size={15} color={AppStyles.primaryColor} />
        </View>
      </View>
    </TouchableOpacity>
  )
};


export default AuthorCookbookCard;

