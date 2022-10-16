import { StyleSheet } from "react-native";

import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    backButtonContainer: {
        paddingHorizontal: 15,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 50,
        paddingHorizontal: 15,
    },
    footerWrapper: {
        alignItems: 'center',
        marginTop: 25,
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
});

