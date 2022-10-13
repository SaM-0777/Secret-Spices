import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


export const headerStyle = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    icon: {},
});


export const textBoxStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    header: {
        color: AppStyles.primaryTextColor,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: AppStyles.primaryFontFamilyBold,
    },
    body: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 10,
    },
    bold: {
        color: AppStyles.secondaryColor,
        fontWeight: '700',
    },
});

