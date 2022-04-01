import Colors from '../constants/color';

import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  logo: {
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  logosize: {
    width: Dimensions.get ('window').width / 2,
    height: 238, 
    resizeMode: 'contain'
  },

  textview: {
    alignItems: 'center',
  },

  logotext: {
    fontFamily: 'quicksand-bold',
    fontSize: 20,
    color: '#800080'
  },

  logotext1: {
    fontFamily: 'quicksand-bold',
    fontSize: 15,
    color: '#800080'
  },

  formview: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '85%',
    marginTop: 40,
    left: 0,
    right: 0,
    alignSelf: 'center',
  },

  formview2: {
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 3,
    width: '80%',
    alignSelf: 'center',
    marginTop:30,
  },

  inputarea: {
    width: '100%',
    height: 55,
    padding: 5,
    borderRadius: 100,
    borderColor: '#800080',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },

  inputtext: {
    width: '80%',
    height: 50,
    fontSize: 14,
    color: '#000000',
  },

  btnview: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    alignContent: 'center',
  },

  btncontainer2: {
    width: '100%',
    height: 55,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // bottom: 20,
    zIndex: 10,
  },

  btncontainer: {
    flex: 1,
    width: '85%',
    height: 65,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  btn: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    width: '100%'
  },

  btntext: {
    fontSize: 20,
    color: Colors.btntextcolor,
    textTransform: 'uppercase',
  },

  checkarea: {
    width: '100%',
    height: 'auto',
    marginBottom: Dimensions.get ('window').height > 700 ? 50 : 20,
  },

  checktitle: {
    fontSize: 20,
  },

  checkboxarae: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },

  checkbtn: {
    width: '48%',
    height: 50,
    elevation: 8,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height:10},
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },

  selectCheck: {
    width: '48%',
    height: 50,
    elevation: 8,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height:10},
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f44555',
  },

  chckimg: {
    width:30,
    height:30,
    marginEnd: 20,
    tintColor: '#f44555'
  },

  chckimgstyle: {
    width:30,
    height:30,
    marginEnd: 20,
    tintColor: 'white'
  },

  chktxt: {
    color: 'black',
    fontSize: 16,
  },

  chktxted: {
    color: 'white',
    fontSize: 16,
  },

  chktxtarr: {
    height: 30,
    padding: 20,
    backgroundColor: Colors.perpule,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  txcolor: {
    color: 'white',
    fontSize: 16,
  },

  formview3: {
    padding: 30,
    marginBottom: 50,
  },

  formviewtxt: {
    fontSize: 20,
    color: Colors.fromtxtcolor,
    marginBottom: 20,
  },

  intentview: {
    flexDirection: 'row',
    width: '100%',
    marginEnd: 10,
    height: 'auto',
    flexWrap: 'wrap',
  },

  intentchk: {
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: Colors.intentchkcolor,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginEnd: 5,
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
intentChecked: {
  flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginEnd: 5,
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
},
  intentchkarr: {
    height: 30,
    padding: 20,
    backgroundColor: Colors.perpule,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  dropdownarea: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
    
  },
  dropdownbox: {
    width: '32%',
  },
  txtareabox: {
    flex: 1,
    backgroundColor: 'white',
    height: 110,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 25,
    borderRadius: 15,
  },
  textarae: {
    width: '100%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    borderColor: '#F2F0F0',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  
  formview4: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // borderWidth: 1,
    // borderColor: 'red',
  },

  uploadbox: {
    width: '32%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    alignItems: 'center',
    opacity: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },

  intentchkarr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
},

errorMsg: {
  color: 'red',
  backgroundColor: 'white',
  borderRadius: 40,
  alignContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'quicksand-bold',
  fontSize: 16,
  paddingHorizontal: 25,
  paddingVertical: 10,
  marginBottom: 10,
},

hlinktxt: {
  fontFamily: 'quicksand-bold',
  fontSize: 18,
  color: '#800080'
}
  
});