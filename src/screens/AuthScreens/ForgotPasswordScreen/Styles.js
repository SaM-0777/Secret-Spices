import { StyleSheet } from "react-native";
import AppStyles from "../../../AppStyles";


export const enterUsernameScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 15,
    },
    headerContainer: {
        marginTop: 50,
    },
    primaryButtonContainer: {
        marginTop: 30,
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


export const enterNewPasswordScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 15,
    },
    headerContainer: {
        marginTop: 50,
    },
    primaryButtonContainer: {
        marginTop: 30,
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

