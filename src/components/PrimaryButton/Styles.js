import { StyleSheet, Dimensions } from "react-native";

export const primaryButtonStyle = StyleSheet.create({
    buttonStyle: {
        width: 0.9 * Dimensions.get('window').width,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textStyle: {
        fontFamily: 'Mulish_SemiBold',
        fontSize: 18,
        
    },
})

