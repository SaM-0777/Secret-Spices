import { Dimensions, StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
});


export const bannerStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.1,
        marginTop: 10,
    },
    backgroundImage: {
        width: '100%',
        aspectRatio: 1 / 1,
    },
    wrapper: {
        margin: 12,
    },
    thumbnail: {
        width: '100%',
        height: 200,
        // aspectRatio: 16/9,
        borderRadius: 10,
    },
    title: {
        color: AppStyles.primaryBackgroundColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 18,
        textAlign: 'justify',
        marginVertical: 12,
    },
    authorName: {
        color: AppStyles.primaryBackgroundColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },
    rating: {
        color: AppStyles.primaryBackgroundColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 7,
    },
    iconContainer: {
        marginTop: 10,
        flexDirection: 'row',
        
    },
});


