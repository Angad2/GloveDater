import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

const RegisterStepTwo = props => {
    return(
        <View style={styles.imageview}>
            <View style={rstyles.logo}>
                <Image source={require('../../assets/images/logo.png')} 
                style={rstyles.logosize}
                />
            </View>
            <View style={rstyles.formview2}>
                <View style={rstyles.checkarea}>
                    <Text style={rstyles.checktitle}>I am a...</Text>
                    <View style={rstyles.checkboxarae}>
                        <TouchableOpacity style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={rstyles.checkarea}>
                    <Text style={rstyles.checktitle}>Looking to date a...</Text>
                    <View style={rstyles.checkboxarae}>
                        <TouchableOpacity style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                 props.navigation.navigate({routeName: 'RegisterThree'});
                }} style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/bg3.jpg')} 
            style={{resizeMode: 'cover'}}
            />
        </View>
    );
};

export default RegisterStepTwo;

