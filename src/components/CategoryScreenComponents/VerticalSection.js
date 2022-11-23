import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { verticalSectionStyles } from './Styles';


function VerticalSection ({ data, header }) {
  return (
    <View style={verticalSectionStyles.container} >
      <Text style={verticalSectionStyles.header} >{header || "Today's Recipes"}</Text>
      {[...Array(5).keys()].map(i => (
        <TouchableOpacity key={i.toString()} activeOpacity={0.95} onPress={/*() => navigation.navigate('recipe-details', { /*recipeId: item._id })*/{}} style={verticalSectionStyles.contentContainer} >
          <Image source={require('../../../assets/images/person-1.jpg')/*{ uri: item.thumbnail, scale: 1.0 }*/} resizeMode={'cover'} style={verticalSectionStyles.thumbnail} />
          <View style={verticalSectionStyles.infoWrapper} >
            <View style={verticalSectionStyles.categoryContainer} >
              <View style={verticalSectionStyles.categoryTextContainer} >
                <View style={verticalSectionStyles.bar} />
                <Text style={verticalSectionStyles.categoryText} >Mexican</Text>
              </View>
              <Ionicons name='bookmark' size={20} color={AppStyles.primaryTextColor} />
            </View>
            <Text style={verticalSectionStyles.title} ellipsizeMode="tail" numberOfLines={1} >{/*item?.title || */"Garlic bread with cheese roll"}</Text>
            <View style={verticalSectionStyles.ratingsWrapper} >
              <Text style={verticalSectionStyles.viewText} >{/*item?.likes ||*/"5"} Likes</Text>
            </View>
            <View style={verticalSectionStyles.footerContainer} >
              <View style={verticalSectionStyles.authorContainer} >
                <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={verticalSectionStyles.authorImg} />
                <Text style={verticalSectionStyles.authorName} >Emma Geller</Text>
                <Ionicons name='checkmark-done-circle' size={18} color={AppStyles.primaryColor} />
              </View>
              <View style={verticalSectionStyles.durationContainer} >
                <Ionicons name='alarm-outline' size={20} color={AppStyles.secondaryTextColor} />
                <Text style={verticalSectionStyles.durationText} >{moment.utc(/*item?.duration * 1000 || */15000).format('mm:ss')} min</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
};


export default VerticalSection;

