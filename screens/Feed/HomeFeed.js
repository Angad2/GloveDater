import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
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
import { oppositeUserTypeListing } from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeFeed = props => {
    const [matchList, setMatchList] = useState([]);
    const [selectedId, setSelectedId] = useState('')
    const [descToggle, setDescToggle] = useState(false);
    const [aboutToggle, setAboutToggle] = useState(false);
    useEffect(() => {
        getUserList();
        const unsubscribe = props.navigation.addListener('didFocus', () => {
            getUserList();
        });

        return unsubscribe;
    }, [props.navigation])

    const getUserList = async () => {
        const user = await AsyncStorage.getItem("user");
        const gender =  JSON.parse(user).Gender
        try {
            const response = await oppositeUserTypeListing(gender);
            if (response.status === 200) {
                setMatchList(response.data.data)
            }
        } catch (error) {
            console.log(error)
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
            <HeaderLogd onSelect={() => { props.navigation.navigate({ }); }} title="Home Feed" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    matchList && matchList.length > 0 ? matchList.map((item, idx) => (
                        <View style={FeedStyle.feedArea} key={idx}>
                            <View style={FeedStyle.feedcard}>
                                <View style={FeedStyle.profileBox}>
                                    {item?.Photo ? <Image source={{uri: `${IMAGE_URL}/${item.Photo}`}}
                                        style={homestyle.profilepic}
                                    /> : <Image source={require('../../assets/images/big-pro.jpg')}
                                        style={homestyle.profilepic}
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
                                    <TouchableOpacity style={FeedStyle.circleBtn}>
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
                                            <Text style={FeedStyle.descriptText}>2 km London , United State of America</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    )) : <></>
                }
            </ScrollView>
            <View style={{ marginTop: 60 }}>
                <Footer navigation={props.navigation} />
            </View>
        </View>
    );

};

export default HomeFeed;
