import React from 'react';
import { View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';

import AppStyles from '../../AppStyles';
import { ingredientBoxStyles } from './Styles';


const IngridientBox = ({ item, index }) => {
  return (
    <View style={[ingredientBoxStyles.container, { marginRight: 10, }]} >
      {/*<SvgUri width={"100%"} height={"100%"} uri={item?.image.toString()} />*/}
      
    </View>
  )
};


export default IngridientBox;

