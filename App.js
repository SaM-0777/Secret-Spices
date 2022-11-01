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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

/* AWS Amplify configuration */
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';

import Root from './src/Root';
import { GettingStartedHeader } from './src/components';


/*
 * $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod
*/

Amplify.configure(awsmobile);

const App = ({ }) => {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <PortalProvider>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </PortalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  )
};


export default App;

