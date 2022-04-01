import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IdentityUper from '../../components/IdentityUper';
import IdentityLower from '../../components/IdentityLower';

import Styles from '../../constants/globalstyle';
import color from '../../constants/color';

import axios from 'axios';
import {BASE_URL} from '../../config';
import { signUpUser } from '../../service';
import { showMessage } from 'react-native-flash-message';

import * as ImagePicker from 'expo-image-picker';
import Colors from '../../constants/color';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Identitypage = props => {
    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intentArr, _intentArr] = useState([]);
    const [ageValue, _ageValue] = useState('');
    const [bodyValue, _bodyValue] = useState('');
    const [heightValue, _heightValue] = useState('');
    const [hairValue, _hairValue] = useState('');
    const [ethnicityValue, _ethnicityValue] = useState('');
    const [intentValue, _intentValue] = useState('');
    const [about, _about] = useState('');
    const [lookingFor, _lookingFor] = useState('');
    const [favtravelSpot, _favtravelSpot] = useState('');
    const [favBarResto, _favBarResto] = useState('');
    const [favDreamExpo, _favDreamExpo] = useState('');
    const [photo, _photo] = useState('');
    const [gallery_photos, _gallery_photos] = useState('');
    
    React.useEffect(() => {
            _email(props.navigation.state.params.param.email),
            _password(props.navigation.state.params.param.password),
            _User_name(props.navigation.state.params.param.User_name),
            _gender(props.navigation.state.params.param.gender),
            _looking(props.navigation.state.params.param.looking),
            _country(props.navigation.state.params.param.country),
            _city(props.navigation.state.params.param.city),
            _intentArr(props.navigation.state.params.param.intentArr),
            _ageValue(props.navigation.state.params.param.ageValue),
            _bodyValue(props.navigation.state.params.param.bodyValue),
            _heightValue(props.navigation.state.params.param.heightValue),
            _hairValue(props.navigation.state.params.param.hairValue),
            _ethnicityValue(props.navigation.state.params.param.ethnicityValue),
            _intentValue(props.navigation.state.params.param.intentValue),
            _about(props.navigation.state.params.param.about),
            _lookingFor(props.navigation.state.params.param.lookingFor)
            _favtravelSpot(props.navigation.state.params.param.favtravelSpot),
            _favBarResto(props.navigation.state.params.param.favBarResto),
            _favDreamExpo(props.navigation.state.params.param.favDreamExpo),
            _gallery_photos (props.navigation.state.params.param.gallery_photos),
            _photo (props.navigation.state.params.param.photo)

    }, [])
    
    React.useEffect(() => {
  
  }, [])
  
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
  _photo(result.uri);
  console.log(result, "++++++++++++++++++Profile Photo");

  if (!result.cancelled) {
    _photo(result.uri);
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
  _photo(result.uri);
  //console.log(result, "++++++++++++++++++Profile Photo");
  // Explore the result

  if (!result.cancelled) {
    _photo(result.uri);
    //console.log(result.uri, "+++++++++++++++++++++++++ Profile Photo 1");
  }
}

    const onChangeHandleSignUp = async () => {
      try {

        //const user = await signUpUser(email, password, User_name, gender, looking, country, city, intentArr.join(","), ageValue, bodyValue, heightValue, hairValue, ethnicityValue, intentValue, about, lookingFor, favtravelSpot, favBarResto, favDreamExpo, photo);
        var data = new FormData();
        data.append('Email', email);
        data.append('Password', password);
        data.append('User_name', User_name);
        data.append('Gender', gender);
        data.append('Looking_to_date_a', looking);
        data.append('Country', country);
        data.append('City', city);
        data.append('Intent_option', intentArr.join(","));
        data.append('Age', ageValue);
        data.append('Body', bodyValue);
        data.append('Height', heightValue);
        data.append('Hair', hairValue);
        data.append('Ethnicity', ethnicityValue);
        data.append('Intent', intentValue);
        data.append('About_me', about);
        data.append('Looking_for', lookingFor);
        data.append('Favorite_travel_spot', favtravelSpot);
        data.append('Favorite_restaurnt', favBarResto);
        data.append('Future_dream_experience', favDreamExpo);
        data.append('Photo', photo);

        axios({
          method: "post",
          url: "http://14.97.177.30:8484/V1/Signup",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (user) {
            if (!user) {
              showMessage({
                message: "Error",
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              });
              return
            }
          else{
            AsyncStorage.setItem("userId", user.data._id);
            AsyncStorage.setItem("token", user.data.Token);
            var photoData = new FormData();
            photoData.append('id', user.data._id);
           const filename=photo.substring(photo.lastIndexOf('/')+1);
           photoData.append('Photo', {
            uri: photo,
            name: filename,
            type: filename.substring(filename.lastIndexOf('/')+1) == "jpg" || filename.substring(filename.lastIndexOf('/')+1) == "jpeg" ? 'image/jpeg':'image/png'
             });
            axios({
              method: "patch",
              url: "http://14.97.177.30:8484/V1/profileupdate",
              data: photoData,
              headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${user.data.Token}` },
            })
              .then(function (response) {
              })
              .catch(function (response) {
              });
              

              for(var i=0; i<gallery_photos.length; i++){
                var data = new FormData();
              
                data.append('User_id', user.data._id);
                data.append('UserPhotos', gallery_photos[i]);
                data.append('Image_name', '');
                  axios({
                    method: "post",
                    url: "http://14.97.177.30:8484/V1/GalleryPhoto",
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${user.data.Token}` },
                  })
                    .then(function (response) {
                    })
                    .catch(function (response) {
                    });
    
                        }
              showMessage({
                message: "Signup sucessfull",
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              });            
              props.navigation.navigate('Feed');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       
      } catch (error) {
        showMessage({
          message: 'Something went wrong please try again later!',
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        });
      }
      
    }

    return (
      
      <View style={Styles.mainbody}>
        <Header onSelect={() => { props.navigation.navigate({ routeName: 'UploadPage' }); }} title="Identity verification" />
        <ScrollView style={{ marginBottom: 70, }}>
          <View>
            <IdentityUper />
            <View style={styles.container}>
      <View style={styles.imagearae}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnx} onPress={showImagePicker}>
            <Text style={styles.btntxt}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnx} onPress={openCamera}>
            <Text style={styles.btntxt}>Open Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          {
            photo !== '' && <Image
              source={{ uri: photo }}
              style={styles.image}
            />
          }
        </View>
      </View>
    </View>
            <View style={{ alignItems: 'center', marginBottom: 30, }}>
              <TouchableOpacity onPress={onChangeHandleSignUp}
                style={Styles.uploadbtn}
              >
                <Text style={Styles.btntxt}>Upload</Text>

              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Footer navigation={props.navigation} />
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

export default Identitypage;