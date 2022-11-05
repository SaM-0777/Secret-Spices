import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { HeaderCarousel } from '../../../components';

import { getRecipeDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function RecipeDetailsScreen({ route, navigation }) {
  const { recipeId } = route?.params
  const [loading, setLoading] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(null)

  async function getResponse() {
    setLoading(true)
    const response = await getRecipeDetailsData(recipeId)
    setRecipeDetails(response[0])
    setLoading(false)
  }
  
  useEffect(() => {
    if (!recipeDetails) getResponse()
    // console.log(recipeDetails)
    return () => {}
  }, [])

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <HeaderCarousel heroBanner={recipeDetails?.heroBanner} />
    </View>
  )
};


export default RecipeDetailsScreen;

