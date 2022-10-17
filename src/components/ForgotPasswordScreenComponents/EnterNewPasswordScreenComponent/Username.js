import React from 'react';
import { View, TextInput } from 'react-native';

import { enterUsernameStyles } from '../Styles';


const Username = ({ email }) => {

  return (
    <View style={enterUsernameStyles.container} >
      <View style={[enterUsernameStyles.inputContainer]} >
        <TextInput editable={false} placeholder={'Email'} value={email} maxLength={50} style={enterUsernameStyles.input} />
      </View>
    </View>
  )
};


export default Username;

