import { StyleSheet } from 'react-native';

import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        paddingHorizontal: 12,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    optionText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyBold,
        fontSize: 16,
    },
    optionBtnText: {
        color: AppStyles.primaryColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

