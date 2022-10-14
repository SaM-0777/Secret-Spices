import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyle = StyleSheet.create({
    container: {
        marginHorizontal: 35,
    },
    headerText: {
        color: AppStyles.primaryTextColor,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: AppStyles.primaryFontFamilyBold,
    },
    headerSubText: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 20,
    },
});


export const dividerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
        marginHorizontal: 35,
    },
    divider: {
        width: '46%',
        height: 1,
        backgroundColor: '#DCDCE4',
    },
    text: {
        marginHorizontal: 12,
    },
});


export const socialLoginButtonStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 0.9 * Dimensions.get('window').width,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        borderRadius: 15,
        /*borderWidth: 1.5,
        borderColor: AppStyles.secondaryColor,*/
    },
    icon: {
        
    },
    text: {
        /*color: AppStyles.secondaryTextColor,*/
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilySemiBold,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    right: {
        
    },
});


