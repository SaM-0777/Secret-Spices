/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

/* AWS Amplify configuration */
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';

import Root from './src/Root';


/*
 * $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod
*/

Amplify.configure(awsmobile); 

const App = ({ }) => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </PaperProvider>
  )
};


export default App;

