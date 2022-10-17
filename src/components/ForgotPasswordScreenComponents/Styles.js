import { StyleSheet, Dimensions } from "react-native";

import AppStyles from '../../AppStyles';


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


export const enterUsernameStyles = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('window').width,
        marginTop: 45,
    },
    inputContainer: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    input: {
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


export const enterCodeStyles = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('window').width,
        marginTop: 20,
    },
    inputContainer: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    input: {
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
});


export const enterNewPasswordStyles = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('window').width,
        marginTop: 20,
    },
    inputContainer: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    input: {
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
    helperText: {
        fontSize: 12,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 1,
    },
})

