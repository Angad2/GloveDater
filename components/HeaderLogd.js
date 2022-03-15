import React from 'react';
import { View, Image, useState, TouchableOpacity, Alert, Text } from 'react-native';
import styles from '../constants/globalstyle';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, IMAGE_URL } from '../config';

const HeaderLogd = props => {
    const [datas, _datas] = React.useState([]);
    const getUserPhoto = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
    
        try {
 
           axios.get(`${BASE_URL}Profile/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
            _datas(res.data);
            console.log(res.data, '--------08-03-22')
            
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
    }

    React.useEffect(()=>{
        getUserPhoto()
    
      },[])
    return (
        <View style={styles.hedermain}>
            <TouchableOpacity 
            onPress={props.onSelect}
            style={styles.arrow}>
            <Image source={require('../assets/images/arrow-bck.png')}
            style={styles.arrow}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={{uri: IMAGE_URL + datas.profile}}
             style={styles.profilepic}>
            </Image>
        </View>
    );
};

export default HeaderLogd;