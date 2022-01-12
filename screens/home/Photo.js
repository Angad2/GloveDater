import React from "react";
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';

import hometabstyles from "./hometabstyles";
import Styles from '../../constants/globalstyle'

import { Ionicons } from '@expo/vector-icons';

const Photo = props => {
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