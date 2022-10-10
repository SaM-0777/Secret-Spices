import { StyleSheet } from "react-native";

import AppStyles from '../../../../AppStyles';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.primaryBackgroundColor,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    footerWrapper: {
        alignItems: 'center',
        marginTop: 25,
    },
});

