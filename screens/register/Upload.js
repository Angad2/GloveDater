import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Header from '../../components/Header';

const Upload = props => {
    return (
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterFive'});}} title="Upload" />
            <View style={rstyles.formview4}>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
            </View>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() => {
                 props.navigation.navigate({routeName: 'Idpage'});
                }} style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Upload;