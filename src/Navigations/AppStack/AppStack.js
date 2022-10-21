/* eslint-disable */

import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen, CategoryScreen, MealPlannerScreen, ActivityScreen, SettingsScreen } from '../../screens';
import AppStyles from '../../AppStyles';


const AppNavigationStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
    tabBarStyle: {
      height: 56,
      position: 'absolute',
      bottom: 15,
      right: 15,
      left: 15,
      borderRadius: 10,
      backgroundColor: AppStyles.secondaryColor,
    }
  })

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={25} color={AppStyles.primaryColor} />
        )
      }} name={'home'} component={HomeScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'grid-sharp' : 'grid-outline'} size={25} color={AppStyles.primaryColor} />
        )
      }} name={'category'} component={CategoryScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <View style={{ width: 55, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: AppStyles.primaryColor }} >
            <Ionicons name={focused ? 'fast-food-sharp' : 'fast-food-outline'} size={25} color={AppStyles.secondaryColor} />
          </View>
        )
      }} name={'meal-planner'} component={MealPlannerScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'notifications-sharp' : 'notifications-outline'} size={25} color={AppStyles.primaryColor} />
        )
      }} name={'activity'} component={ActivityScreen} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} size={25} color={AppStyles.primaryColor} />
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
    </AppNavigationStack.Navigator>
  )
};


export default AppStack;

