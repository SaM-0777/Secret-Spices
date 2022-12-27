import { StyleSheet, Dimensions } from 'react-native';

import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        paddingHorizontal: 10,
    },
    ingredientContainer: {
        // borderTopWidth: 0.182,
        borderBottomWidth: 0.182,
        paddingVertical: 15,
        marginVertical: 20,
        borderColor: AppStyles.secondaryTextColor,
    },
    ingredientText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 20,
    },
    stepContainer: {
        marginVertical: 25,
    },
    stepContainerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stepText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    durationText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 10,
    },
    nutrientSContainer: {

    },
    nutrientsHeader: {

    },
    nutrientText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 16,
        fontWeight: '700',
        
    },
    carouselLoading: {
        width: Dimensions.get('window').width,
        aspectRatio: 16 / 9,
        backgroundColor: '#E5E5E5',
    },
    loadingIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    retryContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    retryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        backgroundColor: AppStyles.primaryBackgroundColor
    },
    retryText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 14,
        marginLeft: 7,
    },
});
