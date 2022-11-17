import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { linksStyles } from './Styles';


function Links({ len, data, onPress }) {
  const [currentFocusedInput, setCurrentFocusedInput] = useState(0)

  function onFocus(index) { setCurrentFocusedInput(index) }
  function onBlur() { setCurrentFocusedInput() }

  return (
    <View style={linksStyles.container} >
      <Text style={linksStyles.headerText} >Links</Text>
      {[...Array(len).keys()].map(i => (
        <View key={i.toString()} style={linksStyles.linkContainer} >
          <Text style={linksStyles.linkHeader} >Link {(i + 1).toString()}</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={1} style={linksStyles.type} >
            <View>
              <Text style={[linksStyles.typeText, data[i] ? { fontSize: 14, marginBottom: 7, } : { fontSize: 16, marginBottom: 10, }]} >Type</Text>
              {data[i] && <Text style={linksStyles.typeOption} >{data[i]}</Text>}
            </View>
            <Ionicons name='chevron-forward' size={22} color={AppStyles.secondaryTextColor} />
          </TouchableOpacity>
          <View style={linksStyles.inputContainer} >
            <Text style={[linksStyles.urlText, currentFocusedInput === i ? { fontSize: 14, marginBottom: 7, } : { fontSize: 16, marginBottom: 10, }]} >URL</Text>
            <TextInput onFocus={() => onFocus(i)} onBlur={onBlur} cursorColor={AppStyles.primaryTextColor} style={linksStyles.link} />
          </View>
        </View>
      ))}
    </View>
  )
};


export default Links;

