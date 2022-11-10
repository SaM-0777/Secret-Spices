import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    authorText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 15,
    },
});


export const authorBoxStyles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
    authorImage: {
        width: 80,
        aspectRatio: 1 / 1,
        borderRadius: 7,
    },
    authorName: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
    },
    authorAbout: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
    },
    boxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    box: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    boxData: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 20,
        fontWeight: '700',
    },
    dataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        // flex: 0.3,
        justifyContent: 'flex-end',
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 5,
    },
    actionContainer: {
        width: '80%',
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    btnText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 20,
        fontWeight: '700', 
    },
});


export const tabStyle = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 7,
        // backgroundColor: 'red'
    },
    tabs: {

    },
    tab: {

    },
    tabText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 16,
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        // width: 50,
        height: 2,
        borderRadius: 7,
        backgroundColor: AppStyles.primaryTextColor,
    },
});


export const authorRecipeCardStyles = StyleSheet.create({
    container: {
        // width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 10,
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


export const authorCookbookCard = StyleSheet.create({
    
});

