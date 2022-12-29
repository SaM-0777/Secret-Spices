/* eslint-disable */

import React, { useState, useEffect, createContext } from 'react';
import { Auth, Hub } from 'aws-amplify';

import AuthStack from './AuthStack';
import AppStack from './AppStack';


const UserContext = createContext()

const RootNavigation = ({  }) => {
  const [user, setUser] = useState(null)  // user form aws-amplify

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

  /*useEffect(() => {
    console.log(user);
    return () => {}
  }, [user])*/
  
  async function getUser() {
    return Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(userData => userData)
      .catch(() => console.log('Not signed in'))
  }

  return (
    <>
      {JSON.stringify(user) ? <UserContext.Provider value={user} ><AppStack /></UserContext.Provider> : <AuthStack />}
    </>
  )
};


export { UserContext };

export default RootNavigation;

