import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { HelperText } from 'react-native-paper';

import { normalInputStyles } from './Styles';


const NormalInput = ({ handleSignupFieldsChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View>
      <View style={[normalInputStyles.container, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : {  }]} >
        <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("username", text)} placeholder={placeholder} style={normalInputStyles.input} />
      </View>
        {isFocused ?
          <HelperText type={'info'} style={normalInputStyles.infoText} >
            This is how others see you.
          </HelperText>
          :
          null
        }
    </View>
  )
};


export default NormalInput;

