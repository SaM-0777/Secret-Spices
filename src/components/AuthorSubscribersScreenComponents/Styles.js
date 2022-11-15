import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const subscriberCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 14,
        textTransform: 'capitalize',
    },
    infoText: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 12.7,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subBtn: {
        width: 95,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    subText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
    },
});

