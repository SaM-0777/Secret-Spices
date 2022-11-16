import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    headerText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 22,
    },
});


export const newPasswordStyles = StyleSheet.create({
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
});


export const oldPasswordStyles = StyleSheet.create({
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

