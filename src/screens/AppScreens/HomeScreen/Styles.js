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
        paddingHorizontal: 12,
    },
    header: {
        position: 'absolute',
        left: 12,
        right: 12,
        top: 0,
        zIndex: 10,
    },
});

