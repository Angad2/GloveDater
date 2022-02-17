import React, {Component} from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');
const height = width * 0.8 //60%

var images = [];
export default class Slider extends Component {
    state = {
      active: 0,   
      images: []
    };
    

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(){
    this.getImages();
  }

getImages = async() =>{
  const userId = await AsyncStorage.getItem('userId');
  const token = await AsyncStorage.getItem('token');
  try {
    var images = [];
           axios.get(`http://14.97.177.30:8484/V1/GalleryPhoto/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
              res.data.map((img) => {
                images.push(img.Image_name)
              }

              ) 
              this.setState({images: images});
            
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
} 

change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
       if(slide !== this.state.active){
         this.setState({active: slide});
       }  
  }

  render() {
   
    return (
      <View style={style.container}>
        <ScrollView 
        pagingEnabled 
        horizontal
        onScroll={this.change} 
        style={style.scroll}>
        {
          this.state.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              showsHorizonalScrollIndicator={false}
              style={style.image} 
            />
          ))
        }
        </ScrollView>
        <View style={style.pagination}>
         {
            this.state.images.map((i,k) => (
                <Text key={k} style={k==this.state.active? style.paginActiveText : style.paginText}>⬤</Text>
            ))
         }
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create ({
  container: { 
      marginTop: 0,
     width, height 
    },

    scroll: {
      width, 
      height
  },

  image: { 
    width, 
    height, 
    resizeMode: "cover" 
  },

  pagination: {
    flexDirection: 'row', 
    alignContent: 'center', 
    alignSelf: 'center', 
    marginTop: 15,
  },

  paginText: {
    color: '#ccc'
  },

  paginActiveText: {
    color: 'red'
  },

})