import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { authorCookbookCardStyles } from './Styles';


function AuthorCookbookCard ({ item }) {
  return (
    <View style={authorCookbookCardStyles.container} >
      <View style={authorCookbookCardStyles.headerContainer} >
        <Ionicons name='add-circle-outline' size={20} color={AppStyles.primaryColor} />
        <Image source={require('../../../assets/images/recipe-thumbnail-1.jpg')} resizeMode={'cover'} style={authorCookbookCardStyles.headerImage} />
      </View>
      <Text>Meals on Demand</Text>
      <View></View>
      <View></View>
      <View></View>
    </View>
  )
};


export default AuthorCookbookCard;

