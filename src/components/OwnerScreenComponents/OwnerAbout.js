import React from 'react';
import { View, Text } from 'react-native';

import AppStyles from '../../AppStyles';
import { ownerAboutStyles } from './Styles';

function OwnerAbout({ description, authSocials }) {
  return (
    <View style={ownerAboutStyles.container} >
      <Text style={ownerAboutStyles.descHeader} >Description</Text>
      <Text style={ownerAboutStyles.desc} >{description || "Description"}</Text>
      <View style={ownerAboutStyles.linkContainer} >
        <Text style={ownerAboutStyles.linkHeader} >Links</Text>

      </View>
    </View>
  )
};


export default OwnerAbout;
