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
        fontSize: 20,
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

    profileBox:{
        flex: 1,
        flexDirection:'row',
        width: '100%',
        height: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom:30,
    },

    profilepic: {
        width: 80,
        height: 80,
        borderRadius:100,
        resizeMode: 'cover',
        marginEnd: 20,
    },

    membershiptxt: {
        backgroundColor: 'white',
        borderRadius: 30,
        color: '#7046E6',
        fontSize: 16,
        fontFamily: 'quicksand-bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    profiletab: {
        flexDirection:'row',
        width: '100%',
        height: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },

    tabproleft: {
        width: '90%',
        height: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },

    iconbox: {
        width: 50,
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        elevation: 8,
        shadowColor: '#000000',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginEnd: 15,
    },

    protxt: {
        fontSize: 18,
        fontFamily: 'quicksand-medium',
        color: '#1e1e1e',
    }

});