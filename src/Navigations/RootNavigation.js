/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

import AuthStack from './AuthStack';
import AppStack from './AppStack';


const RootNavigation = ({  }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData))
          break
        case 'signOut':
          setUser(null)
          break
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data)
          break
      }
    })
    
    getUser().then(userData => setUser(userData));
    
    return () => {}
  }, [])
  
  async function getUser() {
    return Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(userData => userData)
      .catch(() => console.log('Not signed in'))
  }

  return (
    <>
      {JSON.stringify(user) ? <AppStack /> : <AuthStack />}
    </>
  )
};


export default RootNavigation;

