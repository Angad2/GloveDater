import React, { Component } from 'react';
import { View, Text, Image, ImageStore, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.8 //60%

const images = [
  'https://images.pexels.com/photos/9657249/pexels-photo-9657249.jpeg?cs=srgb&dl=pexels-ron-lach-9657249.jpg&fm=jpg',
  'https://images.pexels.com/photos/1449668/pexels-photo-1449668.jpeg?cs=srgb&dl=pexels-leah-kelley-1449668.jpg&fm=jpg',
  'https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?cs=srgb&dl=pexels-sharefaith-1231230.jpg&fm=jpg',
  'https://images.pexels.com/photos/853405/pexels-photo-853405.jpeg?cs=srgb&dl=pexels-josh-willink-853405.jpg&fm=jpg',
  'https://images.pexels.com/photos/6530652/pexels-photo-6530652.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6530652.jpg&fm=jpg',
  'https://images.pexels.com/photos/5086616/pexels-photo-5086616.jpeg?cs=srgb&dl=pexels-jep-gambardella-5086616.jpg&fm=jpg'
]

export default class Slider extends React.Component {
  state = {
    active: 0
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
          images.map((image, index) => (
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
            images.map((i,k) => (
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
      marginTop: 20,
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