/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


/*
 * $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod
*/


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
      <Text >Hello from App.js</Text>
      <Ionicons name={'home'} size={25} color={'#000'} />
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  
});


export default App;

