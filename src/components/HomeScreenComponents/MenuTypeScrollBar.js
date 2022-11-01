import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

import menutypelist from "../../utils/data/menutypelist.json";

import AppStyles from '../../AppStyles';
import { menuTypeScrollBarStyles } from './Styles';


const MenuTypeScrollBar = ({ onButtonPress }) => {
  const [focusedButton, setFocusedButton] = useState(1)

  function onPress(id) {
    setFocusedButton(id)
    // onButtonPress()
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={menuTypeScrollBarStyles.container} >
      {menutypelist.map(item => (
        <TouchableOpacity key={item.id} activeOpacity={0.9} onPress={() => onPress(item.id)} style={[menuTypeScrollBarStyles.button, item.id === 1 ? {  } : { marginLeft: 20 },]} >
          <View style={[menuTypeScrollBarStyles.dot, { borderRadius: 100 }, focusedButton === item.id ? { backgroundColor: AppStyles.secondaryColor, } : {}]} />
          <Text style={[menuTypeScrollBarStyles.text, focusedButton === item.id ? { color: AppStyles.primaryTextColor, } : { color: AppStyles.secondaryTextColor }]} >{item.type}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
};


export default MenuTypeScrollBar;

