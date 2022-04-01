import React, { useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";

import Footer from '../../components/Footer';
import Header from '../../components/Header';


const CountrySearch = props => {

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                    <View>
                        <Text style={Styles.titleabout}>Canada</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={SearchStyle.countryScroll}
                        >

                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>

                        </ScrollView>
                        <Text style={Styles.titleabout}>USA</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={SearchStyle.countryScroll}
                        >

                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>

                        </ScrollView>
                        <Text style={Styles.titleabout}>Brazil</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={SearchStyle.countryScroll}
                        >

                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>

                        </ScrollView>
                        <Text style={Styles.titleabout}>United Kingdom</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={SearchStyle.countryScroll}
                        >

                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>

                        </ScrollView>
                        <Text style={Styles.titleabout}>India</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={SearchStyle.countryScroll}
                        >

                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-1.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-2.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-3.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-4.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>
                            <View style={SearchStyle.countryphotobox}>
                                <Image source={require('../../assets/images/pic-56.png')}
                                    style={SearchStyle.countyphoto}
                                />
                            </View>

                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>

    );
};

export default CountrySearch;