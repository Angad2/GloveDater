import React from "react";
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';

import hometabstyles from "./hometabstyles";
import Styles from '../../constants/globalstyle'

import { Ionicons } from '@expo/vector-icons';

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Photo = props => {
    // const [datas, _datas] = React.useState([]);
    
    // const getUserDtails = async() => {
    //     const userId = await AsyncStorage.getItem('userId');
    //     const token = await AsyncStorage.getItem('token');
    //     //console.log(datas.User_name, 'User Name')
    //     console.log(userId, "__________________-userId")
    //     console.log(token, '----------- user token')
    //     try {
    //         //console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    //         //console.log(`http://14.97.177.30:8484/V1/users/${userId}`)
    //        //axios.get(BASE_URL+`/users/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
    //        axios.get(`http://14.97.177.30:8484/V1/GalleryPhoto/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
    //         .then(res => 
    //         {//console.log("hhghfghf",res)
    //         _datas(res.data)
    //        // _userToken(res.data)
    //         console.log(datas.Email)
    //         console.log(datas.User_name)
            
    //     }
    //         ).catch(err=>console.log(err))
    //      } catch (err) {
    //        console.log("hhhhh",err);
    //      }
    // }

    // React.useEffect(()=>{
    //     getUserDtails()
    
    //   },[])
    return (
        <View style={hometabstyles.mainarea}>
            <View style={Styles.mt30}></View>
            <View style={hometabstyles.mainview}>
                
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-1.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-2.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-3.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-4.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-5.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-6.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>
                <TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-1.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity><TouchableOpacity Styles={hometabstyles.thumnail}>
                    <View style={hometabstyles.viewcount}>
                        <View>
                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                        </View>
                        <Text style={hometabstyles.viewtxt}>25K</Text>
                    </View>
                    <Image source={require ('../../assets/images/thumb-2.jpg')} style={hometabstyles.thumnailimage} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Photo;