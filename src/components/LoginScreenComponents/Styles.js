import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyle = StyleSheet.create({
    container: {
        marginHorizontal: 35,
    },
    headerText: {
        color: AppStyles.primaryTextColor,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: AppStyles.primaryFontFamilyBold,
    },
    headerSubText: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 15,
    },
});


export const emailInputStyles = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('window').width,
        marginTop: 45,
    },
    emailInputContainer: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    emailInput: {
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
    helperText: {
        fontSize: 12,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 1,
    },
});


export const passwordInputStyles = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('window').width,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    input: {
        width: '90%',
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
    helperText: {
        fontSize: 12,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 1,
    },
    button: {
        width: '10%',
        alignItems: 'center',
    },
});


export const backButtonStyles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
});

