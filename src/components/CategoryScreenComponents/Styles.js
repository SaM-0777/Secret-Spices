import { StyleSheet, Dimensions } from "react-native";

import AppStyles from '../../AppStyles';


export const headerStyles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.primaryFontFamilyBold,
        marginLeft: 10,
    },
    
});


export const sectionStyles = StyleSheet.create({
    conatiner: {
        marginBottom: 20,
    },
    header: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 16,
    },
    contentContainer: {
        width: 0.5 * Dimensions.get('window').width - 20,
        height: 200,
        borderRadius: 7,
        marginRight: 10,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    contentThumbnail: {
        width: 0.5 * Dimensions.get('window').width - 20,
        height: 120,
        // width: '100%',
        // aspectRatio: 1 / 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentBody: {
        marginTop: 5,
        paddingHorizontal: 3,
    },
    contentTitle: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyMedium,
        fontSize: 14,
        textTransform: 'capitalize',
    },
    contentAutorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    authorProfile: {
        width: 35,
        height: 35,
        borderRadius: 100,
    },
    authorTitle: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        marginLeft: 10,
    },
});


export const verticalSectionStyles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    header: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 16,
    },
    contentContainer: {
        // width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    thumbnail: {
        width: 100,
        height: 100,
        /*height: '100%',
        aspectRatio: 1 / 1,*/
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


export const exploreButtonStyles = StyleSheet.create({
    container: {
        width: 0.5 * Dimensions.get('window').width - 20,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        margin: 3,
        backgroundColor: AppStyles.primaryColor,
    },
    label: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 15,
    },
});

