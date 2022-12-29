import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Share from 'react-native-share';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderCarousel, RecipeInfoBox, RecipeAuthorBox, RecipeDescription, IngridientBox, StepContainer, NutrientsCard, ShareLoadingMask, } from '../../../components';

import { getRecipeDetailsData } from '../../../utils/api';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const THUMBNAILURL = "https://secret-spices-media-storage64145-staging.s3.amazonaws.com/recipe-thumbnails/"

function RecipeDetailsScreen({ route, navigation }) {
  const { recipeId } = route?.params
  const [loading, setLoading] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [shareLoading, setShareLoading] = useState(false)

  async function onShareRecipe() {
    setShareLoading(true)
    try {
      const shareResponse = await Share.open({
        title: "",
        message: `https://secret-spices-test-api-twktq52o5a-uc.a.run.app/api/user/recipe/details/${recipeDetails._id}`,
      })
      // console.log(JSON.stringify(shareResponse))
    } catch (error) {
      console.log("Share Error: ", error)
    }
    setShareLoading(false)
  }

  async function getResponse() {
    setLoading(true)
    const response = await getRecipeDetailsData(recipeId)
    setRecipeDetails(response[0])
    // console.log(response[0])
    setLoading(false)
  }

  function onRetry() {
    getResponse()
  }
  
  useEffect(() => {
    if (!recipeDetails) getResponse()
    // console.log(recipeDetails)
    return () => {}
  }, [])

  return (
    <SafeAreaView style={Styles.container} >
      {shareLoading ?
        <ShareLoadingMask />
        :
        <>
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
                {recipeDetails !== null ?
                  <>
                    <HeaderCarousel navigation={navigation} heroBanner={[`${THUMBNAILURL}${recipeDetails.Image_Name}.jpg`]} />
                    <View style={Styles.wrapper} >
                      <RecipeInfoBox recipeDetails={recipeDetails} onShare={onShareRecipe} />
                      {/*<RecipeAuthorBox navigation={navigation} recipeDetails={recipeDetails} />*/}
                      {/*<RecipeDescription recipeDetails={recipeDetails} />*/}
                      <View style={Styles.ingredientContainer} >
                        <Text style={Styles.ingredientText} >Ingredients ({recipeDetails?.Ingredients.length})</Text>
                        {recipeDetails?.Ingredients.map((item, i) => (
                          /*<IngridientBox key={i.toString()} item={item} index={i.toString()} />*/
                          <StepContainer key={i.toString()} item={item} index={i} />
                        ))}
                        {/*<ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        </ScrollView>*/}
                      </View>
                      <View style={Styles.stepContainer} >
                        <View style={Styles.stepContainerHeader} >
                          <Text style={Styles.stepText} >Instructions</Text>
                          {/*<View style={Styles.durationContainer} >
                            <Ionicons name={'alarm-outline'} size={22} color={AppStyles.primaryTextColor} />
                            <Text style={Styles.durationText} >{recipeDetails?.duration} secs</Text>
                          </View>*/}
                        </View>
                        {recipeDetails?.Instructions.map((item, index) => (
                          <StepContainer key={index.toString()} item={item} index={index} />
                        ))}
                      </View>
                      {/*<View style={Styles.nutrientSContainer} >
                        <View style={Styles.nutrientsHeader} >
                          <Text style={Styles.nutrientText} >Nutrients</Text>
                        </View>
                        {recipeDetails?.nutrients.map((item, index) => (
                          <NutrientsCard key={index} item={item} />
                        ))}
                      </View>*/}
                      {/**
                    * Comment Section
                    * Ratings etc.
                    */}
                    </View>
                  </>
                  :
                  <>
                    <View style={Styles.retryContainer} >
                      <TouchableOpacity activeOpacity={0.9} onPress={onRetry} style={Styles.retryBtn} >
                        <Ionicons name={'alert-circle-outline'} size={25} color={AppStyles.secondaryColor} />
                        <Text style={Styles.retryText} >Retry</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                }
              </>
            }
          </ScrollView>
        </>
      }
    </SafeAreaView>
  )
};


export default RecipeDetailsScreen;

