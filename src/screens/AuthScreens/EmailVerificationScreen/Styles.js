import {  StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../../AppStyles";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        paddingTop: 60,
        marginHorizontal: 20,
    },
    contentWrapper: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBoxContainer: {
        // marginTop: 80,
    },
    textInput: {
        width: 0.9 * Dimensions.get('window').width,
        height: 45,
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    resendCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,  
    },
    resendCodeInfo: {
        color: AppStyles.primaryTextColor,
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    resendCode: {
        color: AppStyles.primaryColor,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    primaryButtonContainer: {
        marginTop: 40,
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
})

