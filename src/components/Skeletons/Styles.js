import { StyleSheet } from 'react-native';

import AppStyles from '../../AppStyles';


export const recipeSkeletonStyle = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: '#E5E5E5',
    },
    profileName: {
        width: '40%',
        height: 20,
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: '#E5E5E5',
    },
    thumbnail: {
        width: '100%',
        // height: 230,
        aspectRatio: 16 / 9,
        marginVertical: 15,
        borderRadius: 7,
        backgroundColor: '#E5E5E5',
    },
    title: {
        width: '60%',
        height: 20,
        borderRadius: 5,
        // marginLeft: 10,
        backgroundColor: '#E5E5E5',
    },
    info: {
        width: '50%',
        height: 20,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#E5E5E5',
    },
});

