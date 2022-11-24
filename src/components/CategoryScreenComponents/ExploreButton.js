import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { exploreButtonStyles } from './Styles';


function ExploreButton({ label }) {
  return (
    <TouchableOpacity style={exploreButtonStyles.container} >
      <Text style={exploreButtonStyles.label} >{label || "Trending"}</Text>
    </TouchableOpacity>
  )
};


export default ExploreButton;

