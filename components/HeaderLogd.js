import React from 'react';
import { View, Image, useState, TouchableOpacity, Alert, Text } from 'react-native';
import styles from '../constants/globalstyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGE_URL } from '../config';
import { withNavigation } from 'react-navigation';

const HeaderLogd = props => {
    const [datas, _datas] = React.useState();

    const getUser = async () => {
        const result = await AsyncStorage.getItem("user");
        const user = JSON.parse(result)
        _datas(user)
    }

    React.useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={styles.hedermain}>
            <TouchableOpacity
                onPress={props.onSelect}
                style={styles.arrow}>
                <AntDesign name="left" color="#f44555" size={25} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity onPress={props.navToProfile}>
                <Image source={{ uri: `${IMAGE_URL}/${datas?.Photo}` }}
                    style={styles.profilepic}>
                </Image>
            </TouchableOpacity>
        </View>
    );
};

export default HeaderLogd;