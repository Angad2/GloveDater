import React from "react";
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';

import hometabstyles from "./hometabstyles";
import Styles from '../../constants/globalstyle'

import { Ionicons } from '@expo/vector-icons';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Photo = props => {
    const [datas, _datas] = React.useState([]);
    const getGalleryPhotos = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
        try {
           axios.get(`http://14.97.177.30:8484/V1/GalleryPhoto/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
            _datas(res.data)
            console.log(res.data, "-----------Hi Gallery Photo")
            
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
    }

    React.useEffect(()=>{
        getGalleryPhotos()
    
      },[])
    return (
        <View style={hometabstyles.mainarea}>
            <View style={Styles.mt30}></View>
            <View style={hometabstyles.mainview}>
            {
                datas.map((photos, index) => (
                <TouchableOpacity 
                key={index}
             
                Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image  source={{ uri: photos.Image_name }} style={hometabstyles.thumnailimage} />
                    
                </TouchableOpacity>
                ))
                }

            </View>
        </View>
    );
};

export default Photo;