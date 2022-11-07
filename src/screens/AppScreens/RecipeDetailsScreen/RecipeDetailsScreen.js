import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderCarousel, RecipeInfoBox, RecipeAuthorBox, RecipeDescription, IngridientBox, StepContainer, NutrientsCard, BottomActionSheet } from '../../../components';

import { getRecipeDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


function RecipeDetailsScreen({ route, navigation }) {
  const { recipeId } = route?.params
  const [loading, setLoading] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(null)
  const shareSheetRef = useRef()
  const [isShareSheetActive, setIsShareSheetActive] = useState(false)
  const shareSheetSnapPoints = ['50%',]

  function onShareRecipe() {
    setIsShareSheetActive(true)
  }

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
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        {loading ?
          <>
            <View style={Styles.carouselLoading} />
            <View style={Styles.loadingIndicatorContainer} >
              <ActivityIndicator color={AppStyles.primaryColor} size={'large'} />
            </View>
          </>
          : 
          <>
            <HeaderCarousel heroBanner={recipeDetails?.heroBanner} />
            <View style={Styles.wrapper} >
              <RecipeInfoBox recipeDetails={recipeDetails} onShare={onShareRecipe} />
              <RecipeAuthorBox navigation={navigation} recipeDetails={recipeDetails} />
              <RecipeDescription recipeDetails={recipeDetails} />
              <View style={Styles.ingredientContainer} >
                <Text style={Styles.ingredientText} >Ingredients ({recipeDetails?.ingridients.length})</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                  {recipeDetails?.ingridients.map((item, i) => (
                    <IngridientBox key={i.toString()} item={item} index={i.toString()} />
                  ))}
                </ScrollView>
              </View>
              <View style={Styles.stepContainer} >
                <View style={Styles.stepContainerHeader} >
                  <Text style={Styles.stepText} >Steps</Text>
                  <View style={Styles.durationContainer} >
                    <Ionicons name={'alarm-outline'} size={22} color={AppStyles.primaryTextColor} />
                    <Text style={Styles.durationText} >{recipeDetails?.duration} secs</Text>
                  </View>
                </View>
                {recipeDetails?.steps.map((item, index) => (
                  <StepContainer key={index} item={item} index={index} />
                ))}
              </View>
              <View style={Styles.nutrientSContainer} >
                <View style={Styles.nutrientsHeader} >
                  <Text style={Styles.nutrientText} >Nutrients</Text>
                </View>
                {recipeDetails?.nutrients.map((item, index) => (
                  <NutrientsCard key={index} item={item} />
                ))}
              </View>
              {/**
             * Comment Section
             * Ratings etc.
             */}
            </View>
          </>
        }
      </ScrollView>
      <Portal>
        <BottomActionSheet sheetRef={shareSheetRef} sheetSnapPoints={shareSheetSnapPoints} isActive={isShareSheetActive} setIsActive={setIsShareSheetActive} >
          { }
        </BottomActionSheet>
      </Portal>
    </SafeAreaView>
  )
};


export default RecipeDetailsScreen;

