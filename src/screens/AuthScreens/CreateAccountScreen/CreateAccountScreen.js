import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CreateAccountScreen = ({ navigation }) => {
  /*const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnBoarding')
      console.log('item remove')
    } catch (error) {
      console.error('error removing key @viewedOnBoarding from async-storage', error)
    }
  }*/

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <TouchableOpacity onPress={() => {console.log('pressed from create account!')}} >
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CreateAccountScreen;
