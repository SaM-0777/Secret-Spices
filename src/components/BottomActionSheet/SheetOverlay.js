import React from 'react';
import { TouchableOpacity } from 'react-native';

import { sheetOverlayStyles } from './Styles';


const SheetOverlay = ({ isActive, setIsActive }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => setIsActive(false)} style={[sheetOverlayStyles.container, { display: isActive ? 'flex' : 'none' }]} />
  )
};


export default SheetOverlay;

