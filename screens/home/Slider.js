import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGE_URL } from '../../config';
import { getGalleryPhots } from '../../service';

const { width } = Dimensions.get('window');
const height = width * 0.8 //60%

export default class Slider extends Component {
  state = {
    active: 0,
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('token');
      const header = {
        headers: { "Authorization": `Bearer ${token}` }
      }
      const result = await getGalleryPhots(userId, header);
      if (result.status === 200) {
        this.setState({ images: result?.data?.data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={this.change}
          style={style.scroll}>
          {
            this.state.images.length > 0 && this.state.images.map((image, index) => {
              return (
                <Image
                  key={index}
                  source={{ uri: `${IMAGE_URL}${image.UserPhotos}` }}
                  style={style.image}
                />
              )
            })
          }
        </ScrollView>
        <View style={style.pagination}>
          {
            this.state.images.length > 0 && this.state.images.map((i, k) => (
              <Text key={k} style={k == this.state.active ? style.paginActiveText : style.paginText}>⬤</Text>
            ))
          }
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
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
    height:250,
    resizeMode: "cover",
    borderRadius: 10
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