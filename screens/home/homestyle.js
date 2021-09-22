import Colors from '../../constants/color';

import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    homesliderview: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        height: 'auto',

    },

    homeslider: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: Dimensions.get('window').height / 3,
        borderRadius: 10,
    },

    sliderimage: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
        borderRadius: 10,
        resizeMode: 'cover',
    },

    profilenameview: {
        flexDirection: 'row',
        flex: 1,
        padding: 30,
        paddingVertical: 0,
        justifyContent: 'space-between',
        //marginBottom: 20,
    },

    profiletxt: {
        flex: 11,
    },

    nametxt: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'quicksand-bold',
    },

    locationtxt: {
        fontFamily: 'quicksand-medium',
        color: Colors.accentTextColor,
        fontSize: 14,
    },

    profileEdit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});