import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


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
        marginTop: 20,
    },
});


export const primaryInputStyles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 45,
    },
    emailInputContainer: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    phoneInputContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    separator: {
        width: 2,
        height: '50%',
        marginHorizontal: 5,
        backgroundColor: '#DCDCE4',
    },
    emailInput: {
        // width: '100%',
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
        // backgroundColor: 'blue'
    },
    phoneCodeInput: {
        flex: 0.1,
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
    phoneInput: {
        flex: 0.9,
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
        // backgroundColor: 'blue'
    },
    infoText: {
        fontSize: 12,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 7,
    },
    primaryFieldToggleWrapper: {
        width: 180,
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 15,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        letterSpacing: 0.1,
        marginLeft: 10,
    },
})


export const normalInputStyles = StyleSheet.create({
    container: {
        width: '90%',
        height: 48,
        paddingHorizontal: 10,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    input: {
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: 0.8,
    },
});


export const passwordInputStyles = StyleSheet.create({
    container: {
        width: '90%',
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
    button: {
        width: '10%',
        alignItems: 'center',
    },
})

