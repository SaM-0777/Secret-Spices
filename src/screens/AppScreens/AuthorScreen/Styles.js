import { StyleSheet, Dimensions } from 'react-native';
import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        // flex: 1,
        // alignItems: 'center',
    },
    headerContainer: {
        paddingHorizontal: 12,
        /*top: 0,
        left: 0,
        right: 0,*/
        // position: 'relative',
        // position: 'absolute',
        // justifyContent: 'center',
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
    authorPostsContainer: {
        flexGrow: 1,
    },
    emptyDataContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    noDataText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 16,
    },
});

