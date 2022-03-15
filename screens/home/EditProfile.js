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


import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rstyles from "../../screens/rstyles";
import Icon from 'react-native-vector-icons/Feather';

const EditProfile = props => {

    const [datas, _datas] = React.useState([]);
    const [profileData, _profileData] = React.useState([]);

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
    
        try {
 
            await axios.get(`http://14.97.177.30:8484/V1/users/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
                axios.get(`http://14.97.177.30:8484/V1/Profile/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
                .then(resdata =>
                    {
                        _profileData(resdata.data)
                        
                    }
                ).catch(err=>console.log(err))
            _datas(res.data)
            //_profileData(resdata.data)
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
    }


    React.useEffect(()=>{
        getUserDtails()
    
      },[])


const logout = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
}


    return (
        <View style={Styles.mainbody}>
            <HeaderLogd onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="Edit Profile" />
            <View style={hometabstyles.mainarea}>
                <ScrollView>
                    <View style={homestyle.profileBox}>
                        <Image source={{uri:profileData.profile}}
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
                   <TouchableOpacity onPress= {logout} style={homestyle.profiletab}>
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
            <Footer navigation={props.navigation} />
        </View>

    );
};

export default EditProfile;