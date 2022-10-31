import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { headerStyles } from './Styles';
import AppStyles from '../../AppStyles';


const Header = ({ onPress }) => {
  const [username, setUsername] = useState('Angela')

  return (
    <View style={headerStyles.container} >
      <View>
        <Text style={headerStyles.usernameText} >Hi {username}</Text>
        <Text style={headerStyles.text} >What do you want to cook today?</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={headerStyles.profileContainer} >
        <Image source={require('../../../assets/images/profile-1.jpg')} style={headerStyles.profileImage} />
      </TouchableOpacity>
    </View>
  )
};


export default Header;

