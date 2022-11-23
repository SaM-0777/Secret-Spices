import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryScreenHeader, Section, VerticalSection } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const CategoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.conatiner} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <CategoryScreenHeader navigation={navigation} />
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={Styles.sectionContainer} >
          <Section header={"Trending"} />
          <Section header={"Special Dinner"} />
          <VerticalSection header={"Latest Recipes"} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};


export default CategoryScreen;

