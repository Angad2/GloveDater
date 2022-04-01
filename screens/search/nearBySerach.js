import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";

const NearBySearch = props => {

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                        <View style={SearchStyle.searchmain}>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>

                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                            <View style={SearchStyle.imagebox}>
                                <Image source={require('../../assets/images/pic-6.png')}
                                style={SearchStyle.photo}
                                />
                                <Text style={SearchStyle.txt}>Lorem Ipsum</Text>
                            </View>
                        </View>
                </ScrollView>
            </View>
        </View>

    );
};

export default NearBySearch;