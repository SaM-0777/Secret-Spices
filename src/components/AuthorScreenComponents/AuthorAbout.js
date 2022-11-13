import React from 'react';
import { View, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { authorAboutStyles } from './Styles';


const AuthorAbout = ({ description, authSocials }) => {
  return (
    <View style={authorAboutStyles.container} >
      <Text style={authorAboutStyles.descHeader} >Description</Text>
      <Text style={authorAboutStyles.desc} >{description}</Text>
      {authSocials?.length > 0 &&
        <View style={authorAboutStyles.linkContainer} >
          <Text style={authorAboutStyles.linkHeader} >Links</Text>
          
        </View>
      }
    </View>
  )
};


export default AuthorAbout;

