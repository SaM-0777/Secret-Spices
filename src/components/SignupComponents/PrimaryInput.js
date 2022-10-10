import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RNLocalize from 'react-native-localize';

import countryCodes from '../../utils/data/country-codes.json';

import AppStyles from '../../../AppStyles';
import { primaryInputStyles } from './Styles';


const PrimaryInput = ({ type, infoText, placeholder, icon, iconText, handleSignupFieldsChange, onPress }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [flag, setFlag] = useState(null)
  const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAABJ1JREFUSMfll19oU1ccx3+/c29yc2PaJG2TGFvTuljRdnViWx9sxSmlutmhFl+GCBvCQPBhyAR92VDwcb74IJTucQo+zVFQJs6/9M/AlqrB2cZqbbLYJrRNanL/5J7z20McbA/rbevci+fhcC/nz+d8fz/u73wvgl2TADjAdwBdAFkA6V+mcQZeAX1b4czXIOWBM5tt7cbfWXv/wPJKFiH+45XofwEjlkgIQKW+dA4EgGWcYHlgBCDGoLwcXC5DVaVsFnWdEUGhUCK/AzAiAnCHg2prcds2i3M5FOIjI8Q5hsNyIgFPn8Bcbum67cFUohJZTqfR1OSKRPjYmJzNOhTF8ngQQLjdptdr7d/v+flXtBKASEtg24MREYisSASiUUmWpVhMGhsDr7fg88HsrDI3Jw8NUUODjgTr15tqDqwcINrqlm2pnEiW5bpjx6RoVL13T9y4oUSjxsxMoLNTFAra1auOmhqIxSo/65LqPwznR0D7nqT/QjEAfHrgwMaqqvzEhDQ6KgBcXV08nY5euKBPT8cNQ6mo0Ht65Hh8QVEb123arnzcP3cbmU3AFysgiEhEq9xuYZovBwbcr14V794FAF8k4nW7zQcP+MOHXr+/LBwGALOvr7wokg9uqMIlk2SbZmmRMcYYEe3etautra19z575vj5aWGCqKlpaPLt3o89HLhdFIrnxcXN0lDwe8vqDRw9rEhQNc6o4xZAtgrdRDAB1dXWesjJ/fb2aTEZ7e9Xm5nw2+/vFi4+am2M7dz6/di2fSnn37l179qw78dK7oaGy6Kv3bADxZvlKwEQEAE6nkwsxfOmS/9AhT03N64mJ4szMms2b15486SwWnY8fc84LyWSwo0Pt7Hx6/ToyWZZkQHirHAOAqqodHR2NO3Zwzqd6e9n4eNqysLnZf+6c9/z5hYWF+bKy4uBg6qerksezoWlre8OOomyCAFy0lkmLg4lIEFWvXp1LJNZUV6dOn0aA6u5uPj2dHRhw1tdLDkcVY8bQUGFk2P/F0ZeTo0kwLicvpymNgCvMcSnU8Xj8ta6n+vsTuZxRVaU0NdUcObK6rc1tmvKLF8HW1tDBg3IwaFQF4pOTqftDf1iZZ1rcNtQ2lZ0xJoTo6u4+1d7u0HVfa6s+OGgND4OiQCCAhoHz80Qkbdni2r597tYtHgp9U3llYPYOk5gAscjONgWkJPq3+/fVEyc2hkLPbt7MFIv67dssHAafD2WZJ5OkaeVtbcqL5x99+VX/1OBwbBAksP2O7e8yCZETfVtb+8nhwxkhVgWDDNGIxRzT00KSnOvWOVta8pmM+TrnT2vXYj1nPs8wEwW+Xa1+I5oxnJyEK1cqjx+v2LdvLJWiTZv8FRUzmYzpcpUFAmGAuV+uix8u4AcZcDAwhK2iJdxOACAEMOaIx3OnTulPngQaG+c1LW9ZKgCWl69SVfPOHe3yjz6LyIFAYimWYMlGQAhCFLqe7ulBRFVRSNclRFCUWcMgImRAACCW6n6W4zKJANHBmExEmgaMEQBpmkzkYAyI3qHnAiLiHAAAEf56IADgfLlGeUX2Fv5maVfkbeF9/JP4E60nG6TGip3CAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTA3VDEzOjE0OjQwKzAyOjAwHXwFzwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMy0xMC0wN1QxMzoxNDo0MCswMjowMGwhvXMAAAAASUVORK5CYII="
  
  const getFlag = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      })

      if (response.status === 200) {
        console.log('success')
      }
      
    } catch (error) {
      console.log('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    getFlag()
    return () => {}
  }, []);
  
  return (
    <View style={primaryInputStyles.container} >
      {type === 'Email' ?
        <View style={[primaryInputStyles.emailInputContainer, isFocused ? { borderWidth: 2, borderColor: AppStyles.primaryColor } : { }]} >
          <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChangeText={(text) => handleSignupFieldsChange("email", text)} placeholder={placeholder} maxLength={25} keyboardType={'email-address'} style={primaryInputStyles.emailInput} />
        </View>
        :
        <View style={primaryInputStyles.phoneInputContainer} > 
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={primaryInputStyles.phoneCountryCodeContainer} >
            <Image source={flag} resizeMode={'cover'} style={primaryInputStyles.countryFlag} />
          </TouchableOpacity>
          <View style={primaryInputStyles.separator} />
          <TextInput onChangeText={(text) => handleSignupFieldsChange("phone", text)} placeholder={placeholder} keyboardType={'phone-pad'} style={primaryInputStyles.phoneInput} />
        </View>
      }
      <HelperText type={'info'} style={primaryInputStyles.infoText} >{infoText}</HelperText>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={primaryInputStyles.primaryFieldToggleWrapper} >
        <Ionicons name={icon} size={25} color={AppStyles.secondaryColor} />
        <Text style={primaryInputStyles.buttonText} >{iconText}</Text>
      </TouchableOpacity>
    </View>
  )
};


export default PrimaryInput;

