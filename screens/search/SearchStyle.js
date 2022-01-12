import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    searchmain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    imagebox: {
        width: '48%',
        height: 200,
    },

    photo: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },

    txt: {
        fontFamily: 'quicksand-medium',
        fontSize: 16,
        marginVertical: 10,
    },

    countryScroll: {
        width: '100%',
        flexDirection: 'row',
        height: 120,
    },

    countryphotobox: {
        width: 100,
        height: 100,
        marginRight: 10,
    },

    countyphoto: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        borderRadius: 10
    },

});