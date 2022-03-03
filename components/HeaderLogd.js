import React from 'react';
import { View, Image, useState, TouchableOpacity, Alert, Text } from 'react-native';
import styles from '../constants/globalstyle';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderLogd = props => {
    const [datas, _datas] = React.useState([]);
    const getUserPhoto = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
    
        try {
 
           axios.get(`http://14.97.177.30:8484/V1/Profile/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
            _datas(res.data)
            
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
            <Image source={{uri:datas.profile}}
             style={styles.profilepic}>
            </Image>
        </View>
    );
};

export default HeaderLogd;