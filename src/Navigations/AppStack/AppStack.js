/* eslint-disable */

import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  HomeScreen,
  CategoryScreen,
  MealPlannerScreen,
  ActivityScreen,
  SettingsScreen,
  SearchScreen,
  AuthorScreen,
  RecipeDetailsScreen,
  OwnerScreen,
  AddRecipeScreen,
} from '../../screens';
import AppStyles from '../../AppStyles';


const AppNavigationStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
    tabBarStyle: {
      height: 56,
      /*position: 'absolute',
      bottom: 15,
      right: 15,
      left: 15, */
      /*borderTopLeftRadius: 10,
      borderTopRightRadius: 10,*/
      backgroundColor: AppStyles.secondaryColor,
    }
  })

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'home-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'home'} component={HomeScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'grid-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'category'} component={CategoryScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <View style={{ width: 55, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor }} >
            <Ionicons name={focused ? 'fast-food-sharp' : 'fast-food-outline'} size={25} color={AppStyles.secondaryColor} />
          </View>
        )
      }} name={'meal-planner'} component={MealPlannerScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'notifications-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'activity'} component={ActivityScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'settings-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'settings'} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const AppStack = ({ }) => {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })

  return (
    <AppNavigationStack.Navigator screenOptions={screenOptions} >
      <AppNavigationStack.Screen name={'bottom-tab'} component={BottomTab} />
      <AppNavigationStack.Screen name={'search-screen'} component={SearchScreen} />
      <AppNavigationStack.Screen name={'author'} component={AuthorScreen} />
      <AppNavigationStack.Screen name={'recipe-details'} component={RecipeDetailsScreen} />
      <AppNavigationStack.Screen name={'add-recipe'} component={AddRecipeScreen} />
    </AppNavigationStack.Navigator>
  )
};


export default AppStack;

