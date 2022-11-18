import { StyleSheet } from "react-native";

import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        paddingHorizontal: 12,
    },
    fieldContainer: {
        // marginTop: 20,
    },
    bottomSheetContainer: {
        padding: 10,
    },
    bottomSheetHeader: {
        alignSelf: 'center',
        textAlign: 'center',
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyBold,
        fontSize: 16,
        marginBottom: 15,
    },
    bottomSheetButton: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
        // backgroundColor: 'red',
    },
    bottomSheetItemText: {
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.primaryFontFamilyRegular,
        fontSize: 15,
        textTransform: 'capitalize',
    },
    primaryBtnContainer: {
        marginVertical: 10,
    },
});


