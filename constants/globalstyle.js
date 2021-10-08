import Colors from '../constants/color';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainbody: {
    flex: 1,
    backgroundColor: Colors.appmaincolor,
  },

  mv10: {
    marginVertical: 0,
  },

  mv15: {
    marginVertical: 15,
  },

  mv20: {
    marginVertical: 20,
  },

  mh10: {
    marginHorizontal: 10,
  },

  mh15: {
    marginHorizontal: 15,
  },

  mh20: {
    marginHorizontal: 20,
  },

  mt10: {
    marginTop: 10,
  },

  mt15: {
    marginTop: 15,
  },

  mt20: {
    marginTop: 20,
  },

  mt25: {
    marginTop: 25,
  },

  mt30: {
    marginTop: 30,
  },

  mb10: {
    marginBottom: 10,
  },

  mb15: {
    marginBottom: 15,
  },

  mb20: {
    marginBottom: 20,
  },

  mb25: {
    marginBottom: 25,
  },

  mb30: {
    marginBottom: 30,
  },

  pb50: {
    paddingBottom: 50,
  },

  spacediv: {
    height: 100,
  },

  bodytext: {
    fontFamily: 'quicksand-medium',
    fontSize: 15,
    lineHeight: 24
  },

  imageview: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 0,
      justifyContent: 'center',
      top: 0,
      width: '100%',
      height: 'auto'
  },

  hedermain: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginTop: 10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 'auto',
    paddingTop: 50,
  },

  arrow: {
    width: 16,
    height: 26,
    marginRight: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'quicksand-bold',
  },

  titleabout: {
    textAlign: 'left',
    fontSize: 18,
    color: 'black',
    fontFamily: 'quicksand-bold',
  },

  profilepic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    marginLeft: 10,
  },

  //--------------- Foter Styling ------------

  footermain: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.primary,
  },

  footertab: {
    width: '20%',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footertxt: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'quicksand-semi-bold',
  },
  scrollarae: {
    flex: 1,
    position: 'absolute',
    zIndex: 1000,
    top: 200,
    flexDirection: 'row'
  },
  dropdown: {
    height: 50,
    padding: 12,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 100,
    borderColor: '#800080',
    borderWidth: 1,
    alignContent: 'center',
    color: 'black',
    marginTop: 15,
    }
});
  