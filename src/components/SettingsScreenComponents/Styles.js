import { Dimensions, StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 18,
        marginLeft: 15,
    },
});

export const settingTabStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: AppStyles.secondaryTextColor
    },
    btnText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 15,
    },
});


export const logoutModalStyles = StyleSheet.create({
    container: {
        width: .7 * Dimensions.get('window').width,
        height: 120,
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: '#FFF',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        textAlign: 'center',
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 5,
    },
    btn: {
        padding: 5,
        marginHorizontal: 10,
    },
    btnText: {
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 14,
    },
});

