import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IdentityUper from '../../components/IdentityUper';
import IdentityLower from '../../components/IdentityLower';

import Styles from '../../constants/globalstyle';
import axios from 'axios';
import {BASE_URL} from '../../config';
import { signUpUser } from '../../service';
import { showMessage } from 'react-native-flash-message';

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
              console.log(props, "++++++++++++++++++++++++++++++++++++props")
            console.log(props.navigation.state.params.param.email, "+++++++props email"),
            console.log(props.navigation.state.params.param.password, "+++++++props pass"),
            console.log(props.navigation.state.params.param.User_name, "+++++++props username"),
            // console.log(props.navigation.state.params.param.gender, "+++++++props gender"),
            // console.log(props.navigation.state.params.param.looking, "+++++++props looking for"),
            // console.log(props.navigation.state.params.param.country, "+++++++props Country"),
            // console.log(props.navigation.state.params.param.city, "+++++++props city"),
            // console.log(props.navigation.state.params.param.intentArr, "+++++++props Intent_option"),
            // console.log(props.navigation.state.params.param.ageValue, "+++++++props Age"),
            // console.log(props.navigation.state.params.param.bodyValue, "+++++++props Body type"),
            // console.log(props.navigation.state.params.param.heightValue, "+++++++props Height"),
            // console.log(props.navigation.state.params.param.hairValue, "+++++++props Hair type"),
            // console.log(props.navigation.state.params.param.ethnicityValue, "+++++++props EthnicityValue"),
            // console.log(props.navigation.state.params.param.intentValue, "+++++++props intentValue"),
            // console.log(props.navigation.state.params.param.about, "+++++++props About Me"),
            // console.log(props.navigation.state.params.param.lookingFor, "+++++++props Looking For"),
            // console.log(props.navigation.state.params.param.favtravelSpot, "+++++++props My Favourite Spot"),
            // console.log(props.navigation.state.params.param.favBarResto, "+++++++props My Favourite Bar"),
            // console.log(props.navigation.state.params.param.favDreamExpo, "+++++++props My Favourite Dream"),
            console.log(props.navigation.state.params.param.photo, "+++++++props Photo"),
            console.log(props.navigation.state.params.param.gallery_photos, "+++++++props gallery photos"),

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
            _photo(props.navigation.state.params.param.photo),
            _gallery_photos (props.navigation.state.params.param.gallery_photos)


    }, [])


    const onChangeHandleSignUp = async () => {
      //Keyboard.dismiss();
      try {
        //setIsLoading(true);    
       
        const user = await signUpUser(email, password, User_name, gender, looking, country, city, intentArr.join(","), ageValue, bodyValue, heightValue, hairValue, ethnicityValue, intentValue, about, lookingFor, favtravelSpot, favBarResto, favDreamExpo, photo);
        //setIsLoading(false);
        //console.log(user, "++++++++++++++++user id")
        //console.log(user.data._id, "++++++++++++++++user.data")
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
          //console.log(BASE_URL, '============== Base Url')

          for(var i=0; i<gallery_photos.length; i++){
            var data = new FormData();
            console.log(user.data._id, '-------------User Id')
            console.log(user.data.Token, '-------------User token')
            data.append('User_id', user.data._id);
            data.append('UserPhotos', '');
            data.append('Image_name', gallery_photos[i]);
           
              axios({
                method: "post",
                url: "http://14.97.177.30:8484/V1/GalleryPhoto",
                data: data,
                headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${user.data.Token}` },
              })
                .then(function (response) {
                  //handle success
                  console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });

                    

                    }
          showMessage({
            message: "Signup sucessfull",
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          });            
          props.navigation.navigate('Home');
        }
      } catch (error) {
        //setIsLoading(false);
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
            <IdentityLower navigation={props.navigation}
            />
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

export default Identitypage;