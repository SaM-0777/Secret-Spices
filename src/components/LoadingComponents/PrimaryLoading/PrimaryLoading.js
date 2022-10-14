import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';


// primary animated loading screen when app boot.
const PrimaryLoading = ({  }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <Text variant={'bodyLarge'} >Loading...</Text>
    </View>
  )
};


const styles = StyleSheet.create({});


export default PrimaryLoading;

