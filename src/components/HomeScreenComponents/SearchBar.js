import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { searchBarStyles } from './Styles';


const SearchBar = ({ navigation }) => {
  function onPress() {navigation.navigate('search-screen')}

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={searchBarStyles.container} >
      <Ionicons name={'search-sharp'} size={23} style={searchBarStyles.icon} />
      <View style={searchBarStyles.right} >
        <Text style={searchBarStyles.text} >Search</Text>
      </View>
    </TouchableOpacity>
  )
};


export default SearchBar;

