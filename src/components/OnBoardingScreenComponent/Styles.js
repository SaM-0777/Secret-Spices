import { StyleSheet, Dimensions } from "react-native";


export const onBoardingStyles = StyleSheet.create({
    container: {
        
    },
    carouselWrapper: {

    },
    paginatorWrapper: {
        alignItems: 'center',
        marginVertical: 50,
    },
});


export const onBoardingItemStyles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    textWrapper: {
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20,
    },
    title: {
        color: '#000',
        fontFamily: 'DMSans_Bold',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    },
    description: {
        width: 0.8 * Dimensions.get('window').width,
        fontFamily: 'Mulish_Regular',
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginTop: 20,
    },
});


export const paginatorStyles = StyleSheet.create({
    container: {
        height: 64,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: '#212134',
    },
});

