import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

import styles from '../constants/globalstyle';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/home/HomeScreen';
import EditProfile from '../screens/home/EditProfile';


const Footer = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" Component={HomeScreen}/>
            <Tab.Screen name="Profile" Component={EditProfile}/>
        </Tab.Navigator>
        // <View style={styles.footermain}>
        //     <TouchableOpacity onPress={props.onSelect} style={styles.footertab}>
        //         <Ionicons name="md-home" size={32} color="white" />
        //         <Text style={styles.footertxt}>Home</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.footertab}>
        //         <Ionicons name="md-chatbox-ellipses-outline" size={32} color="white" />
        //         <Text style={styles.footertxt}>Chating</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.footertab}>
        //         <Ionicons name="md-search-outline" size={32} color="white" />
        //         <Text style={styles.footertxt}>Search</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.footertab}>
        //         <Ionicons name="filter-outline" size={32} color="white" />
        //         <Text style={styles.footertxt}>Filter</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.footertab}>
        //         <Icon name="user" size={32} color="white" />
        //         <Text style={styles.footertxt}>Profile</Text>
        //     </TouchableOpacity>
        // </View>
    );
};

export default Footer;

