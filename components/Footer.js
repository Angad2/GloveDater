import React from 'react';
import {View, Text, Image, Stylesheet, TouchableOpacity, } from 'react-native';


import Styles from '../constants/globalstyle';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';


const Footer = props => {
    return (
        <View style={Styles.footermain}>
            <TouchableOpacity onPress= {() => {props.navigation.navigate({routeName: 'Home'})}} style={Styles.footertab}>
                <Ionicons name="md-home" size={24} color="white" />
                <Text style={Styles.footertxt}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.footertab} onPress={()=>props.navigation.navigate({routeName: 'Matches'})}>
                <Ionicons name="md-chatbox-ellipses-outline" size={24} color="white" />
                <Text style={Styles.footertxt}>Chating</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {() => {props.navigation.navigate({routeName: 'Global'})}} style={Styles.footertab}>
                <Ionicons name="md-search-outline" size={24} color="white" />
                <Text style={Styles.footertxt}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.footertab}>
                <Ionicons name="filter-outline" size={24} color="white" />
                <Text style={Styles.footertxt}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {() => {props.navigation.navigate({routeName: 'editProfile'})}} style={Styles.footertab}>
                <Icon name="user" size={24} color="white" />
                <Text style={Styles.footertxt}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

