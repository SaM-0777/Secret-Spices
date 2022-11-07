import { StyleSheet, Dimensions } from 'react-native';
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
});

