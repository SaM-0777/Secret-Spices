import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


const PrimaryLoading = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text variant={'bodyLarge'} >Loading...</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default PrimaryLoading;
