import React, { useState } from 'react';
import { View, Image, Text, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AppStyles from '../../AppStyles';
import { recipeInfoBoxStyles } from './Styles';


const RecipeInfoBox = ({ recipeDetails, onShare }) => {
  const [like, setLike] = useState(false)
  const [saved, setIssaved] = useState(false)

  function navigateToAuthor() {
    navigation.navigate('author')
  }

  function onPressLike() {
    if (like === false) setLike(true)
    else setLike(false)
  }
  function onPressSave() {
    if (saved === false) {
      setIssaved(true)
      ToastAndroid.show('saved', 1000, ToastAndroid.CENTER)
    }
    else {
      setIssaved(false)
      ToastAndroid.show('unsaved', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
  }

  return (
    <View style={recipeInfoBoxStyles.container} >
      <View style={recipeInfoBoxStyles.headerContainer} >
        <Text style={recipeInfoBoxStyles.title} >{recipeDetails?.Title}</Text>
        {/*<View style={recipeInfoBoxStyles.activityContainer} >
          <Ionicons onPress={onPressLike} name={like ? 'heart' : 'heart-outline'} size={22} color={like ? 'red' : AppStyles.secondaryColor} />
          <Ionicons onPress={onShare} name={'paper-plane-outline'} size={22} color={AppStyles.secondaryColor} style={{ marginHorizontal: 15, }} />
          <Ionicons onPress={onPressSave} name={saved ? 'bookmark' : 'bookmark-outline'} size={22} color={AppStyles.secondaryColor} />
        </View>*/}
      </View>
      {/*<View style={recipeInfoBoxStyles.infoContainer} >
        {[...Array(5).keys()].map((_, i) => (
          <Ionicons key={i.toString()} name={'star-sharp'} size={22} color={'#F58549'} />
        ))}
        <Text style={[recipeInfoBoxStyles.infoText, { marginLeft: 10, }]} >{recipeDetails?.ratingCount || "4,582"} Ratings</Text>
        <View style={recipeInfoBoxStyles.dot} />
        <Text style={[recipeInfoBoxStyles.infoText, ]} >{recipeDetails?.viewCount} Views</Text>
      </View>
      <View style={recipeInfoBoxStyles.boxContainer} >
        <View style={recipeInfoBoxStyles.box} >
          <Ionicons name={'alarm-outline'} size={22} color={AppStyles.secondaryColor} />
          <Text style={recipeInfoBoxStyles.boxText} >{recipeDetails?.duration} secs</Text>
        </View>
        <View style={recipeInfoBoxStyles.box} >
          <Ionicons name={'people-outline'} size={22} color={AppStyles.secondaryColor} />
          <Text style={recipeInfoBoxStyles.boxText} >{recipeDetails?.servings}</Text>
        </View>
        <View style={recipeInfoBoxStyles.box} >
          <Ionicons name={'flame-outline'} size={22} color={AppStyles.secondaryColor} />
          <Text style={recipeInfoBoxStyles.boxText} >{recipeDetails?.nutrients[0].Calories}</Text>
        </View>
      </View>*/}
      <View>

      </View>
    </View>
  )
};


export default RecipeInfoBox;

