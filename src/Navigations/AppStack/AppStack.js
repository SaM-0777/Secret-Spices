/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
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
  CookbookScreen,
  EditProfileScreen,
  AuthorSubscriberScreen,
  ChangePasswordScreen,
  AccountScreen,
} from '../../screens';
import { CustomLoading, RetryBox } from '../../components';

import { UserContext } from '../RootNavigation';

import { getCurrentUser } from '../../utils/api/get';

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
      {/*<Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'grid-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'category'} component={CategoryScreen} />*/}
      {/*<Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <View style={{ width: 55, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor }} >
            <Ionicons name={focused ? 'fast-food-sharp' : 'fast-food-outline'} size={25} color={AppStyles.secondaryColor} />
          </View>
        )
      }} name={'meal-planner'} component={MealPlannerScreen} />*/}
      {/*<Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'notifications-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'activity'} component={ActivityScreen} />*/}
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={'settings-sharp'} size={25} color={focused ? AppStyles.primaryColor : AppStyles.secondaryBackgroundColor} />
        )
      }} name={'settings'} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

// const UserContext = createContext()

function AppStack ({  }) {
  const currentAWSUser = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [screenOptions, setScreenoptions] = useState({
    headerShown: false,
  })

  async function getResponse() {
    setLoading(true)
    const response = await getCurrentUser(userId)
    setCurrentUser(response[0])
    setLoading(false)
  }

  async function onRetry() {
    await getResponse()
  }

  /*useEffect(() => {
    getResponse()
    return () => {}
  }, [])*/

  /*useEffect(() => {
    // setLoading(false)
  }, [currentUser])*/

  return (
    <AppNavigationStack.Navigator screenOptions={screenOptions} >
      <AppNavigationStack.Screen name={'bottom-tab'} component={BottomTab} />
      <AppNavigationStack.Screen name={'search-screen'} component={SearchScreen} />
      {/*<AppNavigationStack.Screen name={'author'} component={AuthorScreen} />
      <AppNavigationStack.Screen name={'owner'} component={OwnerScreen} />*/}
      <AppNavigationStack.Screen name={'recipe-details'} component={RecipeDetailsScreen} />
      {/*<AppNavigationStack.Screen name={'add-recipe'} component={AddRecipeScreen} />
      <AppNavigationStack.Screen name={'cookbook-details'} component={CookbookScreen} />
      <AppNavigationStack.Screen name={'edit-profile'} component={EditProfileScreen} />*/}
      {/*<AppNavigationStack.Screen name={'author-subscriber'} component={AuthorSubscriberScreen} />*/}
      <AppNavigationStack.Screen name={'change-password'} component={ChangePasswordScreen} />
      {/*<AppNavigationStack.Screen name={'user-account'} component={AccountScreen} />*/}
    </AppNavigationStack.Navigator>
    /*<>
      {loading ? <CustomLoading />
        :
        <>
          {currentUser ?
            <UserContext.Provider value={currentUser} >
            </UserContext.Provider>
          :
            <RetryBox onPress={onRetry} />
          }
        </>
      }
    </>*/
  )
};


/*export { UserContext };*/

export default AppStack;

