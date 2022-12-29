import React from 'react';
import { View } from 'react-native';

import { recipeSkeletonStyle } from './Styles';


function RecipeHomeCardSkeleton({ }) {
  return (
    <View style={recipeSkeletonStyle.container} >
      <View style={recipeSkeletonStyle.header} >
        <View style={recipeSkeletonStyle.profileImage} />
        <View style={recipeSkeletonStyle.profileName} />
      </View>
      <View style={recipeSkeletonStyle.thumbnail} />
      <View style={recipeSkeletonStyle.title} />
      <View style={recipeSkeletonStyle.info} />
    </View>
  )
};


export default RecipeHomeCardSkeleton;

