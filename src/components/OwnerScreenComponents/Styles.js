import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        width: "65%",
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
    },
    authorText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 15,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addContainer: {
        borderRadius: 10,
        borderWidth: 1,
    },
});


export const ownerBoxStyles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
    authorImage: {
        width: 80,
        height: 80,
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
        width: 70,
        height: 70,
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
        borderRadius: 10,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    btnText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 18,
    },
});


export const tabStyles = StyleSheet.create({
    
});


export const ownerAboutStyles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    descHeader: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 16,
        marginBottom: 7,
    },
    desc: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 14,
        textAlign: 'justify',
    },
    linkContainer: {
        marginVertical: 25,
    },
    linkHeader: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 16,
        marginBottom: 7,
    },
});

