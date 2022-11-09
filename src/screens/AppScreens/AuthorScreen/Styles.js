import { StyleSheet, Dimensions } from 'react-native';
import { cyan50 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        paddingHorizontal: 12,
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
        
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 7,
        // backgroundColor: 'red'
    },
    tabs: {
        
    },
    tab: {

    },
    tabText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 16,
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        // width: 50,
        height: 2,
        borderRadius: 7,
        backgroundColor: AppStyles.primaryTextColor,
    },
    flatListItemContainer: {
        width: '100%',
        height: '100%',
    },
});

