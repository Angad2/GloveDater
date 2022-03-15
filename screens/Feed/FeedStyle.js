import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  feedArea: {
    paddingHorizontal: 15,
    flex: 1,
    width: '100%',
    height: 'auto',
   
  },

  feedcard: {
    padding: 0,
    width: '100%',
  },
  profileBox:{
    //flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom:30,
},

locationtxt: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'quicksand-bold',
    flexWrap: "wrap",
    flexShrink:1,
    width: '70%'
},
imageBox: {
    width: '100%',
    height: 380,
},

profileBig: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 30,
},

iconBox: {
    flex: 1,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
},

circleBtn: {
    width: 60,
    height: 60,
    elevation: 8,
    borderRadius: 60,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height:10},
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
}

});