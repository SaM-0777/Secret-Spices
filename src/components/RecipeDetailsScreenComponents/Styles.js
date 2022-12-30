import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const headerCarouselStyles = StyleSheet.create({
    container: {
        // paddingTop: 50,
    },
    backContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 5,
        borderRadius: 100,
        backgroundColor: AppStyles.secondaryBackgroundColor,
        zIndex: 99,
    },
    carouselImage: {
        width: Dimensions.get('window').width,
        aspectRatio: 16 / 9,
        backgroundColor: AppStyles.primaryBackgroundColor,
        /*borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,*/
    },
    indicatorContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 10,
    },
    dot: {
        // height: 10,
        borderRadius: 100,
        // borderWidth: 2,
        borderColor: AppStyles.secondaryColor,
        marginHorizontal: 10,
    },
});


export const recipeInfoBoxStyles = StyleSheet.create({
    container: {
        
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 7,
    },
    title: {
        // width: '70%',
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 18,
        textTransform: 'capitalize',
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    infoText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 500,
        marginHorizontal: 10,
        backgroundColor: AppStyles.secondaryTextColor
    },
    boxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box: {
        // width: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: AppStyles.primaryBackgroundColor,
    },
    boxText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginLeft: 5,
    },
});


export const recipeAuthorBoxStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 100,
    },
    name: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 15,
    },
    btnContainer: {
        width: 90,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        borderRadius: 10,
    },
    btnText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 14,
    },
});


export const recipeDescriptionStyles = StyleSheet.create({
    container: {},
    desc: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 14,
        textAlign: 'justify',
    },
    showMoreBtn: {
        marginLeft: 2,
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 15,
        fontWeight: '700',
    },
});


export const ingredientBoxStyles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppStyles.primaryColor,
        // elevation: 20,
        // shadowColor: '#52006A',
        // backgroundColor: AppStyles.primaryTextColor,
    },
    text: {},
});


export const stepContainerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    indexContainer: {
        width: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        borderRadius: 5,
        backgroundColor: AppStyles.primaryColor,
    },
    index: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
    },
    step: {
        width: '92%',
        textAlign: 'justify',
        marginLeft: 7,
    },
});


export const nutrientsContainerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    key: {
        color: AppStyles.primaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.primaryFontFamilyRegular,
    },
    value: {
        color: AppStyles.primaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.primaryFontFamilyRegular,
    }
});

