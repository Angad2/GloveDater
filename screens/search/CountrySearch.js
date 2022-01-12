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
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="Search" />
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Global' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Global</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>By Country</Text>
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
            <Footer navigation={props.navigation} />
        </View>

    );
};

export default CountrySearch;