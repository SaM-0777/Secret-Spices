import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import AppStyles from '../../AppStyles';
import { recipeDescriptionStyles } from './Styles';


function RecipeDescription({ recipeDetails }) {
  const [isStringLimit, setIsStringLimit] = useState(false)
  const [isEnoughLength, setIsEnoughLength] = useState(false)

  const onTextLayout = useCallback((e) => {
    setIsEnoughLength(e.nativeEvent.lines.length >= 4)
  }, [])
  
  function toggleText() {
    setIsStringLimit(prevState => !prevState)
  }



  return (
    <View style={recipeDescriptionStyles.container} >
      <Text onTextLayout={onTextLayout} numberOfLines={isStringLimit ? undefined : 4} style={recipeDescriptionStyles.desc} >
        {recipeDetails?.description}
      </Text>
      <Text onPress={toggleText} style={recipeDescriptionStyles.showMoreBtn} >{isStringLimit ? "less" : "more"}</Text>
    </View>
  )
};


export default RecipeDescription;

