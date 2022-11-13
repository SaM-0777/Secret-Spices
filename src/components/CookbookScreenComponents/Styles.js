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
        height: '50%',
        marginTop: 10,
    },
    backgroundImage: {
        width: '100%',
        aspectRatio: 1 / 0.95,
    },
    wrapper: {
        margin: 12,
    },
    thumbnail: {
        width: '100%',
        // height: 200,
        aspectRatio: 16 / 9,
        borderRadius: 10,
    },
    title: {
        color: AppStyles.primaryBackgroundColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 18,
        textAlign: 'justify',
        marginVertical: 12,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        alignItems: 'center',
    },
});


export const recipeCardStyles = StyleSheet.create({
    container: {
        // width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    thumbnail: {
        height: '100%',
        aspectRatio: 1 / 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    infoWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
        marginLeft: 10,
        // backgroundColor: 'red'
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bar: {
        width: 2,
        height: 16,
        backgroundColor: AppStyles.primaryColor,
    },
    categoryText: {
        color: AppStyles.primaryColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 15,
        marginLeft: 5,
    },
    title: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 15,
        marginTop: 5,
        textTransform: 'capitalize',
    },
    ratingsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    viewText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImg: {
        width: 25,
        height: 25,
        borderRadius: 100,
    },
    authorName: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 13,
        marginHorizontal: 5,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    durationText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 4,
    },
});

