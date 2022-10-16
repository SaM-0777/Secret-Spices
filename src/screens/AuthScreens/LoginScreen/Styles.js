import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


export default StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    backButtonContainer: {
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        marginVertical: 15,
    },
    forgotPasswordText: {
        color: AppStyles.secondaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        letterSpacing: -0.5,
    },
    loadingOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        backgroundColor: '#000',
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    loadingIndicator: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
    },
    footerWrapper: {
        alignItems: 'center',
        marginTop: 25,
    },
});

