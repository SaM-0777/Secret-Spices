import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const loadingStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
});


export const retryBoxStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        backgroundColor: AppStyles.primaryBackgroundColor
    },
    text: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 7,
    },
});


export const emptyListMessageBoxStyles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 16,
    },
});


export const shareLoadingMaskStyles = StyleSheet.create({
    container: {
        flex: 1,
        // zIndex: -9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mask: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        opacity: 0.8,
        zIndex: -1,
        backgroundColor: '#000',
    },
    text: {
        color: '#FFF',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 10,
    },
    loadingContainer: {
        width: 120,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: '#000',
        zIndex: 10,
    },
});

