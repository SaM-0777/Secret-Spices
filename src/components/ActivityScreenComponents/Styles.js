import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.primaryFontFamilyBold,
        marginLeft: 15,
    },
});

