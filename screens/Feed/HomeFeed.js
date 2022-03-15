import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styles from '../../constants/globalstyle';
import HeaderLogd from "../../components/HeaderLogd";
import Footer from "../../components/Footer";
import FeedStyle from "./FeedStyle";
import homestyle from "../home/homestyle";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const HomeFeed = props => {

    return(
        <View style={Styles.mainbody}>
            <HeaderLogd onSelect={() => { props.navigation.navigate({ routeName: 'editProfile' }); }} title="Home Feed" />
            <View style={FeedStyle.feedArea}>
                <View style={FeedStyle.feedcard}>
                    <View style={FeedStyle.profileBox}>
                        <Image source={require('../../assets/images/profile-pic2.jpg')}
                            style={homestyle.profilepic}
                        />
                        <View>
                            <Text style={homestyle.nametxt}>Jasika Mikel</Text>
                            <Text style={FeedStyle.locationtxt}>Age: 24 yr, Location: Californiya, USA united america</Text>
                        </View>
                    </View>
                    <View style={FeedStyle.imageBox}>
                        <View>
                        <Image source={require('../../assets/images/big-pro.jpg')}
                            style={FeedStyle.profileBig}
                        />
                        </View>
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
                        </View>
                    </View>
                </View>
                <Text>Home Feed</Text>
            </View>
            <Footer navigation={props.navigation} />
        </View>
    );

};

export default HomeFeed;
