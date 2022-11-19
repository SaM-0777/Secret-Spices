import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const accountBoxStyles = StyleSheet.create({
    container: {
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImageContainer: {
        
    },
    profileImage: {
        width: 85,
        height: 85,
        borderRadius: 7,
    },
    editBtn: {

    },
    editIcon: {
        position: 'absolute',
        bottom: '5%',
        right: '1%',
        padding: 4,
        borderRadius: 5,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
});


export const inputFieldStyles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    label: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
    },
    inputContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.7,
        borderBottomColor: AppStyles.secondaryTextColor,
    },
    input: {
        width: '92%',
        height: '100%',
        // backgroundColor: 'red'
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
    },
    icon: {

    },
});


export const linksStyles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    headerText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 16,
        marginBottom: 10,
    },
    linkContainer: {
        marginTop: 10,
    },
    linkHeader: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 14,
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    type: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.7,
    },
    typeText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    typeOption: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 15,
        textTransform: 'capitalize',
        marginBottom: 7,
    },
    inputContainer: {
        marginTop: 7,
        marginBottom: 10,
    },
    urlText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    link: {
        height: 40,
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        // backgroundColor: 'red',
    },
});

