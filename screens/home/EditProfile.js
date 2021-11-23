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


import aboutstyle from "./aboutstyle";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rstyles from "../../screens/rstyles";
import { Value } from "react-native-reanimated";

const EditProfile = props => {

    const [datas, _datas] = React.useState([]);
    const [intentArr, _intentArr] = useState([])
    

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, "__________________-userId")
        try {
           await axios.get(`http://14.97.177.30:8484/V1/users/${userId}`)
            .then(res => 
            {console.log(res.data.Email)
            _datas(res.data)
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log(err);
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
                            <Text style={homestyle.nametxt}>{datas.user_name}</Text>
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
                   <TouchableOpacity style={homestyle.profiletab}>
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
            <Footer />
        </View>

    );
};

export default EditProfile;