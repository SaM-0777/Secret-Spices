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
import { Provider as PaperProvider } from 'react-native-paper';

import { OnBoardingScreen } from './src/screens';


/*
 * $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod
*/


const App = () => {
  return (
    <PaperProvider>
      <OnBoardingScreen />
    </PaperProvider>
  )
};


const styles = StyleSheet.create({
  
});


export default App;

