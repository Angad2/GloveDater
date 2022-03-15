import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";

import Footer from '../../components/Footer';
import Header from '../../components/Header';


const SearchGlobal = props => {

    return (
        <View style={Styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="Search" />
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity
                        style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>Global</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={() => {
                        props.navigation.navigate({ routeName: 'Country' });
                    }}
                    style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>By Country</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                        // onPress={() => {
                        //     props.navigation.navigate({ routeName: 'Homeexp' });
                        // }}
                         style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Near</Text>
                    </TouchableOpacity>
                </View>
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
            <Footer navigation={props.navigation} />
        </View>

    );
};

export default SearchGlobal;