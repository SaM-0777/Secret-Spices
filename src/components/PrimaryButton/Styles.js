import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const primaryButtonStyle = StyleSheet.create({
    buttonStyle: {
        width: 0.9 * Dimensions.get('window').width,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textStyle: {
        fontSize: 18,
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
    },
})

