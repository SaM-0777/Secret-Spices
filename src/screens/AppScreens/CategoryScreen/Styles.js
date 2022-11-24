import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";


export default StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
    wrapper: {
        paddingHorizontal: 12,
    },
    sectionContainer: {
        marginTop: 5,
    },
    btnContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
});

