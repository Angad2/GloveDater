import React from 'react';
import { View, Text, Image, useState, TouchableOpacity } from 'react-native';
import styles from '../constants/globalstyle';

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
            <Image source={require('../assets/images/profile-icon.png')}
             style={styles.profilepic}>
            </Image>
        </View>
    );
};

export default Header;