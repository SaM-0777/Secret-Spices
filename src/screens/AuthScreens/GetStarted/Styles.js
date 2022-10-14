import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStartedButtonWrapper: {
        marginTop: 70,
    },
    loginButton: {
        marginBottom: 25,
    },
    loginButtonText: {
        color: AppStyles.primaryTextColor,
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
        fontWeight: '700',
    },
});

