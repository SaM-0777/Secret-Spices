import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { accountBoxStyles } from './Styles';


function AccountBox({ thumbnail }) {
  const [selectedImageURI, setSelectedImageURI] = useState(thumbnail)

  async function onPressPickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImageURI(result.assets[0].uri)
      // console.log(result)
    }
    else {
      ToastAndroid.show('No Image selected', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={accountBoxStyles.container} >
      <TouchableOpacity onPress={onPressPickImage} activeOpacity={0.95} style={accountBoxStyles.profileImageContainer} >
        <Image source={{ uri: selectedImageURI, scale: 1.0 }} resizeMode={'cover'} style={accountBoxStyles.profileImage} />
        <Ionicons name='pencil' size={15} color={AppStyles.primaryTextColor} style={accountBoxStyles.editIcon} />
      </TouchableOpacity>
    </View>
  )
};


export default AccountBox;

