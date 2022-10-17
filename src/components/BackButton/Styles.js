import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const backButtonStyles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
});

