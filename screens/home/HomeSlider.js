import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

import Homestyle from './homestyle';
import Styles from '../../constants/globalstyle'

const HomeSlider = props => {
    return (
        <View style={Homestyle.homesliderview}>
            <View style={Homestyle.homeslider}>
            <Image source={require('../../assets/images/Clip.jpg')} style={Homestyle.sliderimage} />
            </View>
        </View>
    );
};

export default HomeSlider;