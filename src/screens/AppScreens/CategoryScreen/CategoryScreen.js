import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryScreenHeader, Section } from '../../../components';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';


const CategoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.conatiner} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <View style={Styles.wrapper} >
        <CategoryScreenHeader navigation={navigation} />
        <View style={Styles.sectionContainer} >
          <Section header={"Trending"} />
        </View>
      </View>
    </SafeAreaView>
  )
};


export default CategoryScreen;

