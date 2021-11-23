import Colors from '../../constants/color';

import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    infobox: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 4}, 
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 5,
    marginHorizontal: 5,
    },

    info: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        paddingVertical: 7,
    },

    infoboxarr: {
        flex: 1,
    },

    

    infotitle: {
        fontFamily: 'quicksand-medium',
        fontSize: 16,
        flex: 1,
        color: Colors.primaryTextColor,
    },
    
    infovalue: {
        fontFamily: 'quicksand-bold',
        fontSize: 16,
        flex: 1,
        color: 'black',
    },

    infoarea: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
    },
});