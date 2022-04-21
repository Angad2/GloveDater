import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    feedArea: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flex: 1,
        width: '100%',
        height: 'auto',
    },

    feedcard: {
        padding: 5,
        flex: 1,
        // minHeight: 90,
        backgroundColor: '#fcfcfc',
        borderRadius: 10,
        marginTop: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 0 },
        elevation: 8,
        flexDirection: 'row',
    },
    profileBox: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    locationtxt: {
        color: '#666666',
        fontSize: 14,
        fontFamily: 'quicksand-bold',
        flexWrap: "wrap",
        // width: '100%'
    },
    imageBox: {
        width: '100%',
        // height: 380,
    },

    profileBig: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        resizeMode: "cover",
        // marginBottom: 20,
    },

    iconBox: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        marginTop: 10
    },

    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 20
    },
    circleBtn: {
        width: 50,
        height: 50,
        elevation: 8,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 10 },
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },
    toggleBtnContainer: {
        height: 45,
        width: 250,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        paddingHorizontal: 2,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 10 },
        elevation: 6
    },

    toggleBtnOn: {
        height: 40,
        width: '50%',
        backgroundColor: '#7046e7',
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    toggleBtnOff: {
        height: 45,
        width: '50%',
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleBtnTextOn: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'quicksand-bold',
    },
    toggleBtnTextOff: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'quicksand-bold',
    },
    descriptContainer: {
        marginTop: 10,
        paddingRight: 15,
        paddingLeft: 5
    },
    descriptIcon: {
        flexDirection: 'row',
        marginTop: 10
    },
    descriptText: {
        marginLeft: 10,
        color: '#888888',
        fontSize: 14,
        fontFamily: 'quicksand-bold',
    },

    receiverMsg: {
        backgroundColor: "#800080",
        padding: 5,
        maxWidth: '80%',
        marginLeft: 'auto',
        marginRight: 10,
        paddingVertical: 5,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        minWidth: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 0,
    },

    senderMsg: {
        backgroundColor: "#e0e0e0",
        padding: 5,
        maxWidth: '80%',
        marginLeft: 'auto',
        marginRight: 10,
        paddingVertical: 5,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        minWidth: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 30,
    }

});