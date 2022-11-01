import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    usernameText: {
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontWeight: '700',
    },
    text: {
        color: AppStyles.secondaryTextColor,
        fontSize: 14,
        fontFamily: AppStyles.secondaryFontFamilyRegular
    },
    profileContainer: {
        padding: 4,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: AppStyles.primaryColor,
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: 10,
        shadowRadius: 12,
    },
});


export const searchBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#E7E7E7',
    },
    icon: {
        flex: 0.09,
        color: AppStyles.secondaryTextColor,
        opacity: 0.85,
    },
    right: {
        flex: 0.91,
    },
    text: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16.9,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginLeft: 5,
    },
});


export const menuTypeScrollBarStyles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 5,
        height: 5,
        marginRight: 7,
    },
    text: {
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
    },

});

