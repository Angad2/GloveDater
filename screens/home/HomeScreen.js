import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import Footer from '../../components/Footer';
import HeaderLogd from '../../components/HeaderLogd';

import Styles from '../../constants/globalstyle';
import Homestyle from './homestyle';
import hometabstyles from './hometabstyles';

import {BASE_URL} from '../../config';

import { Octicons } from '@expo/vector-icons';
import Photo from './Photo';
import Slider from './Slider';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
    const [datas, _datas] = React.useState([]);
    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
    //console.log(userId, '--------- User Id Home');
   // console.log(token, '--------- User token Home')
        try {
 
           axios.get(`http://14.97.177.30:8484/V1/users/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
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
        getUserDtails()
    
      },[])
    return (
        <View style={Styles.mainbody}>
            <HeaderLogd onSelect = {() =>{ props.navigation.navigate({routeName: 'Idpage'});}} title="Home" />
            <ScrollView>
            <Slider />
            <View style={Homestyle.profilenameview}>
                <View style={Homestyle.profiletxt}>
                    <Text style={Homestyle.nametxt}>{datas.User_name}</Text>
                    <Text style={Homestyle.locationtxt}>{datas.Email}</Text>
                </View>
                <TouchableOpacity style={Homestyle.profileEdit} onPress= {() => {props.navigation.navigate({routeName: 'editProfile'})}}>
                    <Octicons name="pencil" size={20} color="#f44555" />
                </TouchableOpacity>
            </View>
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity 
                    style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({routeName: 'Homeabout'});
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>About</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                         onPress={() => {
                            props.navigation.navigate({ routeName: 'Homeexp' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Experiences</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Photo />
            <View style={Styles.spacediv}></View>
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View>
    );
};

export default HomeScreen;