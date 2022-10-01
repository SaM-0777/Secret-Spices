import { StyleSheet, Dimensions } from "react-native";


export const onBoardingStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    carouselWrapper: {
        // flex: 3,
        alignItems: 'center',
    },
    paginatorWrapper: {
        alignItems: 'center',
        marginVertical: 50,
    },
});


export const onBoardingItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        /*width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',*/
        // backgroundColor: 'red'
        // width: '80%',
        alignItems: 'center',
    },
    image: {
        // flex: 0.7,
        width: 300,
        height: 300,
        // alignSelf: 'center',
        // backgroundColor: 'blue',
    },
    textWrapper: {
        // flex: 0.3,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20,
        // backgroundColor: 'blue',
    },
    title: {
        //minWidth: 350,
        // width: 0.9 * Dimensions.get('window').width,
        color: '#000',
        fontFamily: 'DMSans_Bold',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        // alignSelf: 'center',
        // backgroundColor: 'red',
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

