import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../AppStyles';
import { sectionStyles } from './Styles';


function Section({data, header}) {
  return (
    <View style={sectionStyles.conatiner} >
      <Text style={sectionStyles.header} >{header || "Today's Recipes"}</Text>
      <ScrollView nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10, }} >
        {[...Array(5).keys()].map(i => (
          <TouchableOpacity key={i.toString()} activeOpacity={0.9} style={sectionStyles.contentContainer} >
            <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={sectionStyles.contentThumbnail} />
            <View style={sectionStyles.contentBody} >
              {/*<View style={sectionStyles.contentHeader} >
                <View style={sectionStyles.durationContainer} >
                  <Ionicons name='alarm-outline' color={AppStyles.primaryTextColor} size={15} />
                  <Text>15 min</Text>
                </View>
                <View style={sectionStyles.activityContainer} >
                  <Ionicons name='paper-plane-outline' color={AppStyles.primaryTextColor} size={15} style={{ marginRight: 10 }} />
                  <Ionicons name='bookmark-outline' color={AppStyles.primaryTextColor} size={15} />
                </View>
              </View>*/}
              <Text style={sectionStyles.contentTitle} numberOfLines={1} ellipsizeMode={'tail'} >Garlic Bread with cheese roll</Text>
              <View style={sectionStyles.contentAutorContainer} >
                <Image source={require('../../../assets/images/person-1.jpg')} resizeMode={'cover'} style={sectionStyles.authorProfile} />
                <Text style={sectionStyles.authorTitle} >Emma Geller</Text>
              </View>
              
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}


export default Section;

