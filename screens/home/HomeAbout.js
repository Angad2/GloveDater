import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "./hometabstyles";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Ionicons } from '@expo/vector-icons';
import aboutstyle from "./aboutstyle";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rstyles from "../../screens/rstyles";

const HomeAbout = props => {

   const [datas, _datas] = React.useState([]);
   const [intentArr, _intentArr] = useState([])
    

    const getUserDtails = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
        try {
           axios.get(`http://14.97.177.30:8484/V1/users/${userId}`, {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => 
            {
            _datas(res.data)
        }
            ).catch(err=>console.log(err))
         } catch (err) {
           console.log("hhhhh",err);
         }
    }
    const printArr = (intenss) => {
        if(intenss){
            const splitArry = intenss.split(',');
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
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="About Me" />
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Home' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>About</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Homeexp' });
                        }}
                         style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Experiences</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                <Text style={Styles.titleabout}>Address</Text>
                    <View style={aboutstyle.infobox}>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Country:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Country}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>City:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.City}</Text>
                        </View>
                    </View>
                    <Text style={Styles.titleabout}>About</Text>
                    <View style={aboutstyle.infobox}>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>I am a...:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Gender}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Looking for a...:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Looking_to_date_a}</Text>
                        </View>
                    </View>
                    <Text style={Styles.titleabout}>Intent</Text>
                        <View style={aboutstyle.info}>
                        <Text>{datas.Intent_option}</Text>
                        </View>
                    <Text style={Styles.titleabout}>Basic</Text>
                    <View style={aboutstyle.infobox}>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Age:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Age}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Body:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Body}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Height:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Height}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Hair:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Hair}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Ethnicity:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.Ethnicity}</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Intent:</Text>
                            <Text style={aboutstyle.infovalue}>{datas.inttentd}</Text>
                        </View>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.titleabout}>About Me</Text>
                    <Text style={Styles.bodytext}>
                            {datas.About_me}
                        </Text>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.titleabout}>Looking For</Text>
                        <Text style={Styles.bodytext}>
                            {datas.Looking_for}
                        </Text>
                    </View>
                    <View style={Styles.spacediv}></View>
                </ScrollView>
            </View>
            <Footer navigation={props.navigation} />
        </View>

    );
};

export default HomeAbout;