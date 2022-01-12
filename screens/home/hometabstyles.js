import Colors from '../../constants/color';

import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    mainarea: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 0,
    },

    tabarea : {
        //paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: Colors.faintborder,
        borderBottomWidth: 1,
        //marginHorizontal: 30,
        //marginBottom: 30,
    },
    
    tabs: {
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.primary,
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10,
    },

    tabtext: {
        fontFamily: 'quicksand-medium',
        fontSize: 16,
        color: Colors.fromtxtcolor,
        textAlign: 'center',
    },

    tabselect: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10,
    },

    tabselecttxt: {
        fontFamily: 'quicksand-bold',
        fontSize: 16,
        color: Colors.primary,
        textAlign: 'center',
    },

    //-------------------- Photo Section --------------

    mainview: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    thumnail: {
        width: Dimensions.get('window').width / 3.8,
        height: Dimensions.get('window').height / 8,
    },

    viewcount: {
        position: 'absolute',
        bottom: 5,
        left: 3,
        padding: 5,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width / 3.8,
        backgroundColor: 'black',
        // flex: 1,
        // opacity: 0.5
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    viewicon: {
        fontSize: 20,
        color: Colors.primary,
        marginRight: 5,
        opacity: 1,
    },

    viewtxt: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'quicksand',
        opacity: 1,
    },

    thumnailimage: {
        width: Dimensions.get('window').width / 3.8,
        height: Dimensions.get('window').height / 8,
        borderRadius: 10,
        marginHorizontal: 3,
        marginBottom: 10,
    }
});