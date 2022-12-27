import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    usernameText: {
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontWeight: '700',
    },
    text: {
        color: AppStyles.secondaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.secondaryFontFamilyRegular
    },
    profileContainer: {
        padding: 4,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: AppStyles.primaryColor,
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
    },
});


export const searchBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#E7E7E7',
    },
    icon: {
        flex: 0.09,
        color: AppStyles.secondaryTextColor,
        opacity: 0.85,
    },
    right: {
        flex: 0.91,
    },
    text: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16.9,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginLeft: 5,
    },
});


export const menuTypeScrollBarStyles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 5,
        height: 5,
        marginRight: 7,
    },
    text: {
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
    },
});


export const recipeCardStyles = StyleSheet.create({
    container: {
        // padding: 10,
        borderRadius: 10,
        marginVertical: 12,
        backgroundColor: AppStyles.secondaryBackgroundColor,
        // backgroundColor: 'red',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: '#E5E5E5',
    },
    profileText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
        fontSize: 15,
        marginLeft: 10,
    },
    thumbnail: {
        width: '100%',
        // height: 230,
        aspectRatio: 16/9,
        marginVertical: 15,
        borderRadius: 7,
        backgroundColor: '#E5E5E5',
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: '10%',
        right: '3.5%',
        padding: 3,
        borderRadius: 5,
        backgroundColor: AppStyles.secondaryColor,
    },
    durationText: {
        color: AppStyles.primaryColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 5,
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    activityLeft: {
        maxWidth: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingCount: {
        color: AppStyles.secondaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginLeft: 10,
    },
    activityRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sharebtn: {
        marginRight: 10,
    },
    likeCount: {
        color: AppStyles.secondaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginVertical: 2,
    },
    footerContainer: {
        // marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 2,
        height: 2,
        backgroundColor: AppStyles.secondaryTextColor,
    },
    footerText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
    },
    title: {
        // maxWidth: '90%',
        // paddingRight: 10,
        // backgroundColor: 'red',
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.poppinsFontRegular,
        // fontWeight: '700',
    },

});

