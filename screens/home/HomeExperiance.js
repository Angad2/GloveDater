import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "./hometabstyles";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Ionicons } from '@expo/vector-icons';
import aboutstyle from "./aboutstyle";

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeExperiance = props => {
    const [datas, _datas] = React.useState([]);

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, "__________________-userId")
        try {
           await axios.get(`http://14.97.177.30:8484/V1/users/${userId}`)
            .then(res => 
            {//console.log(res.data.Email)
            _datas(res.data)
            //console.log(datas.Email)
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log(err);
         }
    }

    React.useEffect(()=>{
        getUserDtails()
    
      },[])

    return (
        <View style={Styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="Experience" />
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Home' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={() => {
                            props.navigation.navigate({ routeName: 'Homeabout' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>About</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>Experiences</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={Styles.mv20}>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.title}>Favorite travel spot</Text>
                    <Text style={Styles.mt10,Styles.bodytext}>
                            {datas.Favorite_travel_spot}
                        </Text>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.title}>Favorite bar/restaurant</Text>
                        <Text style={Styles.mt10, Styles.bodytext}>
                            {datas.Favorite_restaurnt}
                        </Text>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.title}>Future dream experience</Text>
                        <Text style={Styles.mt10, Styles.bodytext}>
                            {datas.Future_dream_experience}
                        </Text>
                    </View>
                    <View style={Styles.spacediv}></View>
                </ScrollView>
            </View>
            <Footer />
        </View>

    );
};

export default HomeExperiance;