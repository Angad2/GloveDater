import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from 'react-navigation';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeSlider from './HomeSlider';

import Styles from '../../constants/globalstyle';
import Homestyle from './homestyle';
import hometabstyles from './hometabstyles';

import { Octicons } from '@expo/vector-icons';
import Photo from './Photo';
import Slider from './Slider';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
    const [datas, _datas] = React.useState([]);

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, "__________________-userId")
        try {
           await axios.get(`http://14.97.177.30:8484/V1/users/${userId}`)
            .then(res => 
            {console.log(res.data.Email)
            _datas(res.data)
            console.log(datas.Email)
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log(err);
         }
    }

    React.useEffect(()=>{
        getUserDtails()
    
      },[])
    return (
        <View style={Styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'Idpage'});}} title="Home" />
            <ScrollView>
            <Slider />
            <View style={Homestyle.profilenameview}>
                <View style={Homestyle.profiletxt}>
                    <Text style={Homestyle.nametxt}>{datas.user_name}</Text>
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
            <Footer />
            {/* <NavigationContainer>
                <Footer />
            </NavigationContainer> */}
        </View>
    );
};

export default HomeScreen;