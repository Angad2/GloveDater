import React from 'react';
import { View, Image, useState, TouchableOpacity, Alert, Text } from 'react-native';
import styles from '../constants/globalstyle';

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
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <Text></Text>
            
        </View>
    );
};

export default Header;