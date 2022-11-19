import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { linksStyles } from './Styles';


function Links({ len, data, onPress, onTextChange }) {
  const [currentFocusedInput, setCurrentFocusedInput] = useState(0)

  function onFocus(index) { setCurrentFocusedInput(index) }
  function onBlur() { setCurrentFocusedInput() }
  function onFieldChange(text, index) {
    if (data[index]) onTextChange(data[index], text)
  }

  return (
    <View style={linksStyles.container} >
      <Text style={linksStyles.headerText} >Links</Text>
      {[...Array(3).keys()].map(i => (
        <View key={i.toString()} style={linksStyles.linkContainer} >
          <Text style={linksStyles.linkHeader} >Link {(i + 1).toString()}</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={1} style={linksStyles.type} >
            <View>
              <Text style={[linksStyles.typeText, data[i] !== undefined ? { fontSize: 14, marginBottom: 7, } : { fontSize: 16, marginBottom: 10, }]} >Type</Text>
              {data[i] !== undefined && <Text style={linksStyles.typeOption} >{data[i].socialName}</Text>}
            </View>
            <Ionicons name='chevron-forward' size={22} color={AppStyles.secondaryTextColor} />
          </TouchableOpacity>
          <View style={linksStyles.inputContainer} >
            <Text style={[linksStyles.urlText, currentFocusedInput === i ? { fontSize: 14, marginBottom: 7, } : { fontSize: 16, marginBottom: 10, }]} >URL</Text>
            <TextInput value={data[i]?.url} onFocus={() => onFocus(i)} onBlur={onBlur} onChangeText={(text) => onFieldChange(text, i.toString())} cursorColor={AppStyles.primaryTextColor} style={[linksStyles.link, currentFocusedInput === i ? { borderBottomWidth: 1, borderBottomColor: AppStyles.primaryColor } : { borderBottomWidth: 0.5, }]} />
          </View>
        </View>
      ))}
    </View>
  )
};


export default Links;

