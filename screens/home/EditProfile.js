import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "./hometabstyles";
import homestyle from "./homestyle";

import Footer from '../../components/Footer';
import HeaderLogd from "../../components/HeaderLogd";

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config, { IMAGE_URL } from "../../config";

const EditProfile = props => {
    const [datas, _datas] = React.useState([]);

    React.useEffect(() => {
        getUserDtails()

    }, [])

    const getUserDtails = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const userData = JSON.parse(user)
            _datas(userData)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        await AsyncStorage.clear();
        await AsyncStorage.setItem(config.GlobeRememberMe, "no");
        props.navigation.navigate('NonAuthStack');
    }

    return (
        <View style={Styles.mainbody}>
            <HeaderLogd onSelect={() => { props.navigation.goBack() }} title="Edit Profile" />
            <View style={hometabstyles.mainarea}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={homestyle.profileBox}>
                        <Image source={{ uri: `${IMAGE_URL}/${datas.Photo}` }}
                            style={homestyle.profilepic}
                        />
                        <View>
                            <Text style={homestyle.nametxt}>{datas.User_name}</Text>
                            <Text style={homestyle.membershiptxt}>Premium Membership</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={homestyle.profiletab}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <MaterialCommunityIcons name="pencil" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Edit Profile</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homestyle.profiletab} onPress={() => props.navigation.navigate('Matches')}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <Entypo name="users" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Matches</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homestyle.profiletab}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <Ionicons name="settings-outline" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Setting</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homestyle.profiletab}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <MaterialIcons name="support-agent" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Support</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homestyle.profiletab}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <MaterialCommunityIcons name="account-question-outline" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Faq</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress= {() => {props.navigation.navigate({routeName: 'Login'})}} style={homestyle.profiletab}> */}
                    <TouchableOpacity onPress={logout} style={homestyle.profiletab}>
                        <View style={homestyle.tabproleft}>
                            <View style={homestyle.iconbox}>
                                <MaterialCommunityIcons name="logout" size={24} color="#7046e6" />
                            </View>
                            <Text style={homestyle.protxt}>Log Out</Text>
                        </View>
                        <Text><Entypo name="chevron-small-right" size={30} color="#888888" /></Text>
                    </TouchableOpacity>
                    <View style={Styles.spacediv}></View>
                </ScrollView>
            </View>
            {/* <Footer navigation={props.navigation} /> */}
        </View>

    );
};

export default EditProfile;