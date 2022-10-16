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
        paddingTop: 80,
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

