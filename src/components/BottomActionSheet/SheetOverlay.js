import React from 'react';
import { TouchableOpacity } from 'react-native';


import { sheetOverlayStyles } from './Styles';

const SheetOverlay = ({ }) => {
  const handleOverlayPress = () => {
    
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handleOverlayPress} style={sheetOverlayStyles.container} >

    </TouchableOpacity>
  )
};


export default SheetOverlay;

