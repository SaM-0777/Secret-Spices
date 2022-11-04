import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyles from '../../AppStyles';

import { searchSuggestion } from './Styles';


function SearchSuggestion({ item }) {
  return (
    <View style={searchSuggestion.container} >
      <TouchableOpacity style={searchSuggestion.suggestionContainer} >
        <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={searchSuggestion.image} />
        <Text style={searchSuggestion.text} >{item.searchString}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={searchSuggestion.closeContainer} >
        <Ionicons name={'close'} size={20} color={AppStyles.primaryTextColor} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchSuggestion;
