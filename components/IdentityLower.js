import React, { useState, useEffect, Component } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  StyleSheet,
  Alert,
  Dimensions

} from "react-native";

import * as ImagePicker from 'expo-image-picker';
import Colors from '../constants/color'

import { FontAwesome, Ionicons, MaterGlobeNavigatorialCommunityIcons } from '@expo/vector-icons';


const IdentityLower = props => {
  const [pickedImagePath, setPickedImagePath] = useState('');

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagearae}>
        {/* <FontAwesome name="upload" size={50} color={Colors.primary} />
                <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover', top: 0, }}
                /> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnx} onPress={showImagePicker}>
            <Text style={styles.btntxt}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnx} onPress={openCamera}>
            <Text style={styles.btntxt}>Open Camera</Text>
          </TouchableOpacity>
          {/* <Button style={styles.btn} onPress={showImagePicker} title="Open Gallery" />
          <Button onPress={openCamera} title="Open Camera" /> */}
        </View>

        <View style={styles.imageContainer}>
          {
            pickedImagePath !== '' && <Image
              source={{ uri: pickedImagePath }}
              style={styles.image}
            />
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
    alignContent: 'center',

  },

  imagearae: {
    backgroundColor: '#FFEDEF',
    width: '100%',
    height: Dimensions.get("window").height / 4,
    justifyContent: 'flex-start',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
  },

  uploadbtn: {
    width: "50%",
    height: 56,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#7046E6',
    marginTop: 36,
    alignContent: 'center',
    alignItems: 'center',
  },

  btntxt: {
    fontSize: 18,
    color: 'white',
  },

  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    top: 85,
  },
  imageContainer: {
    padding: 0,
    position: 'absolute',
    top: -240,
    borderRadius: 100,
    // borderColor: 'red',
    // borderWidth: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 3,
  },

  btnx: {
    borderRadius: 10,
    marginEnd: 5,
    marginStart: 5,
    padding: 10,
    backgroundColor: 'red',
    width: 120,
    alignContent: 'center',
    alignItems: 'center',
  }
});

export default IdentityLower;
