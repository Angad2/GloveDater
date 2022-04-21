import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../../constants/globalstyle';
import HeaderLogd from "../../components/HeaderLogd";
import Footer from "../../components/Footer";
import FeedStyle from "./FeedStyle";
import homestyle from "../home/homestyle";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { IMAGE_URL } from "../../config";
import { locationUpdate, oppositeUserTypeListing } from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { getDistanceFromLatLonInKm } from '../../service/distanceFinder';
import { StatusBar } from "expo-status-bar";
import globalstyle from "../../constants/globalstyle";
import Loader from "../../components/Loader";


const HomeFeed = props => {
    const [matchList, setMatchList] = useState([]);
    const [selectedId, setSelectedId] = useState('')
    const [descToggle, setDescToggle] = useState(false);
    const [aboutToggle, setAboutToggle] = useState(false);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserList();
        const unsubscribe = props.navigation.addListener('didFocus', () => {
            getUserList();
        });
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location?.coords);
            updateLocation(location?.coords);
        })();

        // return unsubscribe;
    }, [props.navigation])

    const updateLocation = async (location) => {
        const user = await AsyncStorage.getItem("user");
        const userId = JSON.parse(user).Id
        const updater = {
            id: userId,
            lat: location.latitude,
            long: location.longitude
        }
        try {
            const response = await locationUpdate(updater);
            // console.log('res', response);
            getUserList();
        } catch (error) {
            console.log(error)
        }
    }

    const getUserList = async () => {
        const user = await AsyncStorage.getItem("user");
        const gender = JSON.parse(user).Gender
        try {
            const response = await oppositeUserTypeListing(gender);
            if (response.status === 200) {
                setMatchList(response.data.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const aboutToggleBtn = (type, id) => {
        if (type === 'about') {
            setAboutToggle(true)
            setDescToggle(false)
            setSelectedId(id)
        }
    }
    const descToggleBtn = (type, id) => {
        if (type === 'desc') {
            setDescToggle(true)
            setAboutToggle(false)
            setSelectedId(id)
        }
    }

    return (
        <View style={Styles.mainbody}>
            {/* <StatusBar barStyle="default" translucent={true} backgroundColor="#ccc"  /> */}
            <HeaderLogd onSelect={() => { props.navigation.navigate({}); }} title="Home Feed" navToProfile={()=>props.navigation.navigate('Profile')}  />
            {/* {loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#f44555" />
            </View>
                : */}
                {loading && <Loader/>}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        matchList && matchList.length > 0 ? matchList.map((item, idx) => (
                            <View style={FeedStyle.feedArea} key={idx}>
                                <View style={FeedStyle.feedcard}>
                                    <View style={FeedStyle.profileBox}>
                                        {item.Photo ? <Image source={{ uri: `${IMAGE_URL}/${item.Photo}` }}
                                            style={homestyle.profilepic}
                                        /> : <Image source={require('../../assets/images/big-pro.jpg')} style={homestyle.profilepic}
                                        />}
                                        <View style={{ flex: 1 }}>
                                            <Text style={homestyle.nametxt}>{item.User_name}</Text>
                                            <Text style={FeedStyle.locationtxt}>Age: {item.Age}yr Location: {item.City} {item.Country}</Text>
                                        </View>
                                    </View>
                                    <View style={FeedStyle.horizontalLine}></View>
                                    <Image source={require('../../assets/images/big-pro.jpg')}
                                        style={FeedStyle.profileBig}
                                    />
                                    <View style={FeedStyle.iconBox}>
                                        <TouchableOpacity style={FeedStyle.circleBtn}
                                         onPress={() => props.navigation.navigate('Messages',{userId: item._id})}
                                        >
                                            <MaterialCommunityIcons name="chat-processing-outline" size={30} color="#ee374b" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={FeedStyle.circleBtn}>
                                            <Feather name="heart" size={30} color="#ee374b" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={FeedStyle.circleBtn}>
                                            <Ionicons name="close" size={30} color="#ee374b" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={FeedStyle.circleBtn}>
                                            <Ionicons name="ios-checkmark-sharp" size={30} color="green" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={FeedStyle.toggleBtnContainer}>
                                        <TouchableOpacity style={!aboutToggle && selectedId === idx ? FeedStyle.toggleBtnOff : FeedStyle.toggleBtnOn} onPress={() => {
                                            aboutToggleBtn('about', idx)
                                        }}>
                                            <Text style={!aboutToggle && selectedId === idx ? FeedStyle.toggleBtnTextOff : FeedStyle.toggleBtnTextOn}>About Me</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={descToggle && selectedId === idx ? FeedStyle.toggleBtnOn : FeedStyle.toggleBtnOff} onPress={() => {
                                            descToggleBtn('desc', idx)
                                        }}>
                                            <Text style={descToggle && selectedId === idx ? FeedStyle.toggleBtnTextOn : FeedStyle.toggleBtnTextOff}>Description</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {!aboutToggle && selectedId === idx ?
                                        <View style={FeedStyle.descriptContainer}>
                                            <View style={FeedStyle.descriptIcon}>
                                                <Text style={FeedStyle.descriptText}>{item?.About_me}</Text>
                                            </View>
                                        </View>
                                        :
                                        <View style={FeedStyle.descriptContainer}>
                                            <View style={FeedStyle.descriptIcon}>
                                                <FontAwesome5 name="shopping-bag" size={20} color="#888888" />
                                                <Text style={FeedStyle.descriptText}>Product Manager at Facebook</Text>
                                            </View>
                                            <View style={FeedStyle.descriptIcon}>
                                                <Ionicons name="school" size={20} color="#888888" />
                                                <Text style={FeedStyle.descriptText}>Oxford University London, USA</Text>
                                            </View>
                                            <View style={FeedStyle.descriptIcon}>
                                                <MaterialIcons name="location-pin" size={22} color="#888888" />
                                                <Text style={FeedStyle.descriptText}>{getDistanceFromLatLonInKm(location?.latitude,location?.longitude, item?.location?.coordinates[1], item?.location?.coordinates[0])} km {item?.City} , {item?.Country}</Text>
                                            </View>
                                        </View>
                                    }
                                </View>
                            </View>
                        )) : <View style={globalstyle.noData}>
                            <Text>No data available</Text>
                        </View>
                    }
                </ScrollView>
            {/* <View style={{ marginTop: 60 }}>
                <Footer navigation={props.navigation} />
            </View> */}
        </View>
    );

};

export default HomeFeed;
