import { StyleSheet } from "react-native";
import AppStyles from "../../../AppStyles";


export default StyleSheet.create({
    container: {
        flex: 1,
        /*alignItems: 'center', 
        justifyContent: 'center',*/
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 12,
    },
    header: {
        /*position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        overflow: 'hidden',
        zIndex: 999,*/
        paddingHorizontal: 0,
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

