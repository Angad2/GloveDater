import React from 'react';
import { View, Image, useState, TouchableOpacity, Alert, Text } from 'react-native';
import styles from '../constants/globalstyle';
import AntDesign from 'react-native-vector-icons/AntDesign';


import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = props => {
   
    return (
        <View style={styles.hedermain}>
            <TouchableOpacity 
            onPress={props.onSelect}
            style={styles.arrow}>
            <Image source={require('../assets/images/arrow-bck.png')}
            style={styles.arrow}></Image>
            {/* <AntDesign name="left" color="#f44555" size={25}/> */}
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <Text></Text>
            
        </View>
    );
};

export default Header;