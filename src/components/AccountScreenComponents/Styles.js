import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const accountBoxStyles = StyleSheet.create({
    container: {
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImageContainer: {
        
    },
    profileImage: {
        width: 85,
        height: 85,
        borderRadius: 7,
    },
    editBtn: {

    },
    editIcon: {
        position: 'absolute',
        bottom: '5%',
        right: '1%',
        padding: 4,
        borderRadius: 5,
        backgroundColor: AppStyles.secondaryBackgroundColor,
    },
});

