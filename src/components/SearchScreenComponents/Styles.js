import { StyleSheet } from 'react-native';

import AppStyles from '../../AppStyles';


export const searchBoxStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
    },
    icon: {
        flex: 0.09,
        color: AppStyles.secondaryTextColor,
        opacity: 0.85,
    },
    input: {
        flex: 0.91,
        height: 45,
        color: AppStyles.primaryTextColor,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#E7E7E7',
    },
});


export const searchSuggestion = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    suggestionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 40,
        borderRadius: 5,
    },
    text: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: AppStyles.secondaryFontFamilyRegular,
    },
    closeContainer: {

    },
});

