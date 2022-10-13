import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

import { textBoxStyles } from './Styles';


const TextBox = ({ email }) => {
  return (
    <View style={textBoxStyles.container} >
      <Text style={textBoxStyles.header} >Verify Code</Text>
      <Text style={textBoxStyles.body} >We just sent a verification code to <Text style={textBoxStyles.bold} >sam.2.3.4.5.ranjan@gmail.com</Text>. Enter the code below to continue.</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default TextBox;
