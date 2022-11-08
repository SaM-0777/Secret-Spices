import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    authorText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 15,
    },
});


export const authorBoxStyles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
    authorImage: {
        width: 80,
        aspectRatio: 1 / 1,
        borderRadius: 7,
    },
    authorName: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
    },
    authorAbout: {
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
    },
    boxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    box: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    boxData: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 20,
        fontWeight: '700',
    },
    dataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        // flex: 0.3,
        justifyContent: 'flex-end',
        color: AppStyles.secondaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 5,
    },
    actionContainer: {
        width: '80%',
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    btnText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 20,
        fontWeight: '700', 
    },
});

