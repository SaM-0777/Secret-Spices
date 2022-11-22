import { StyleSheet, Dimensions } from "react-native";

import AppStyles from '../../AppStyles';


export const headerStyles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: AppStyles.primaryTextColor,
        fontSize: 18,
        fontFamily: AppStyles.primaryFontFamilyBold,
        marginLeft: 10,
    },
    
});



export const sectionStyles = StyleSheet.create({
    conatiner: {

    },
    header: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 16,
    },
    contentContainer: {
        width: 0.5 * Dimensions.get('window').width - 20,
        height: 250,
        borderRadius: 7,
        marginRight: 10,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    contentThumbnail: {
        width: 0.5 * Dimensions.get('window').width - 20,
        height: 120,
        // width: '100%',
        // aspectRatio: 1 / 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentBody: {
        marginTop: 5,
        paddingHorizontal: 3,
    },
    contentTitle: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyMedium,
        fontSize: 14,
        textTransform: 'capitalize',
    },
    contentAutorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    authorProfile: {
        width: 35,
        height: 35,
        borderRadius: 100,
    },
    authorTitle: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        marginLeft: 10,
    },
});

