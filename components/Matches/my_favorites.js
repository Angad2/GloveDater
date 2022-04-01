import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from '../../constants/globalstyle';
import hometabstyles from "../../screens/home/hometabstyles";
import SearchStyle from "./matchStyle";
import { IMAGE_URL } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favouriteController } from '../../service';

function My_favorites() {
    const [myFavouriteList, setMyFavouriteList] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const user = await AsyncStorage.getItem("user");
        const userId =  JSON.parse(user).Id
        const response = await favouriteController(userId)
        setMyFavouriteList(response?.data?.data?.myFavourite);
    }

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                    <View style={SearchStyle.searchmain}>
                        {
                            myFavouriteList && myFavouriteList.length > 0 ? myFavouriteList.map((fav, idx) => (
                                <View style={SearchStyle.imagebox} key={idx}>
                                    <Image source={{uri: `${IMAGE_URL}/${fav?.myFavrouteUserId?.Photo}`}}
                                        style={SearchStyle.photo}
                                    />
                                    <Text style={SearchStyle.txt}>{fav?.myFavrouteUserId?.User_name}</Text>
                                </View>
                            )) :
                                <View style={{ flex: 1, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>No data available</Text>
                                </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default My_favorites