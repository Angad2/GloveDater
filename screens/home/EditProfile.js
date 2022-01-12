import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "./hometabstyles";
import homestyle from "./homestyle";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

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
    const [intentArr, _intentArr] = useState([])
    

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
        console.log(datas.User_name, 'User Name')
        console.log(userId, "__________________-userId")
        console.log(token, '----------- user token')
        try {
            //console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            //console.log(`http://14.97.177.30:8484/V1/users/${userId}`)
           axios.get(`http://14.97.177.30:8484/V1/users/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {console.log("hhghfghf",res)
            _datas(res.data)
           // _userToken(res.data)
            console.log(datas.Email)
            //console.log(datas.User_name)
            
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
    }
    const printArr = (intenss) => {
        if(intenss){
            const splitArry = intenss.split(',');
            console.log(splitArry)
            return (
                
                    splitArry &&
                    splitArry.map(inten => {
                        <TouchableOpacity key={inten.name} style={rstyles.intentchk}>
                            <Text style={rstyles.chktxt}>{inten.splitArry}</Text>
                        </TouchableOpacity>}
                    )
            )
               
        }
    }

    React.useEffect(()=>{
        getUserDtails()
    
      },[])

    return (
        <View style={Styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="Edit Profile" />
            <View style={hometabstyles.mainarea}>
                <ScrollView>
                    <View style={homestyle.profileBox}>
                        <Image source={require('../../assets/images/profile-pic.jpg')}
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
                   <TouchableOpacity onPress= {() => {props.navigation.navigate({routeName: 'Login'})}} style={homestyle.profiletab}>
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