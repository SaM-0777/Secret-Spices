import { StyleSheet } from 'react-native';

import AppStyles from '../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
})



