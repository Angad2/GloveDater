import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeSlider from './HomeSlider';

import Styles from '../../constants/globalstyle';
import Homestyle from './homestyle';
import hometabstyles from './hometabstyles';

import { Octicons } from '@expo/vector-icons';
import Photo from './Photo';

const HomeScreen = props => {
    return (
        <View style={Styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'Idpage'});}} title="Home" />
            <ScrollView>
            <HomeSlider />
            <View style={Homestyle.profilenameview}>
                <View style={Homestyle.profiletxt}>
                    <Text style={Homestyle.nametxt}>Hasel Jackson</Text>
                    <Text style={Homestyle.locationtxt}>Age : 25 , Californiya , USA</Text>
                </View>
                <TouchableOpacity style={Homestyle.profileEdit}>
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
        </View>
    );
};

export default HomeScreen;