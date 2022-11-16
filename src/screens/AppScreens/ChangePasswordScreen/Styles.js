import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
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
    wrapper: {
        /*flex: 1,
        justifyContent: 'center',*/
        marginTop: 60,
        paddingHorizontal: 12,
    },
    inputContainer: {
        marginVertical: 20,
    },
});

