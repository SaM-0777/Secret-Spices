import { StyleSheet } from "react-native";


export const bottomActionStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        ...StyleSheet.absoluteFillObject,
    },
    bottomSheet: {
        zIndex: 1,
        opacity: 1,
    },
});


export const sheetOverlayStyles = StyleSheet.create({
    container: {
        opacity: 0.5,
        backgroundColor: '#000',
        ...StyleSheet.absoluteFillObject,
    },
});

