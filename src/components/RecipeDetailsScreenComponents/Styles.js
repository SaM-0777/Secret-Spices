import { StyleSheet, Dimensions } from "react-native";
import AppStyles from "../../AppStyles";


export const headerCarouselStyles = StyleSheet.create({
    container: {
        // paddingTop: 50,
    },
    carouselImage: {
        width: Dimensions.get('window').width,
        aspectRatio: 16 / 9,
        /*borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,*/
    },
    indicatorContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 10,
    },
    dot: {
        // height: 10,
        borderRadius: 100,
        // borderWidth: 2,
        borderColor: AppStyles.secondaryColor,
        marginHorizontal: 10,
    },
});

