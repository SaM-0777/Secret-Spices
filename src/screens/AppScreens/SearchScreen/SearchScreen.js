import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SearchBox, SearchSuggestion } from '../../../components';

import Styles from './Styles';

import searchHistory from '../../../utils/data/searchSuggestion.json';


const SearchScreen = ({ navigation }) => {

  function onPressSeeAll () {}

  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <View style={Styles.wrapper} >
        <SearchBox navigation={navigation} />
        <View style={Styles.optionContainer} >
          <Text style={Styles.optionText} >Recent</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={onPressSeeAll} >
            <Text style={Styles.optionBtnText} >See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {searchHistory.map(item => (
            <SearchSuggestion key={item._id} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};


export default SearchScreen;

