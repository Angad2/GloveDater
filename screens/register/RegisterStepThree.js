import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

import Header from '../../components/Header';

const RegisterStepThree = props => {
    return(
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterTwo'});}} title="Propile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Country</Text>
                <View style={rstyles.inputarea}>
                    <TextInput style={rstyles.inputtext} placeholder='Enter Country Name . . .' />
                    <Image source={require('../../assets/images/delete-icon.png')} 
                    style={{width: 27, height: 30, resizeMode: 'contain'}}
                />
                </View>
                <Text style={rstyles.formviewtxt}>City</Text>
                <View style={rstyles.inputarea}>
                    <TextInput style={rstyles.inputtext} placeholder='Enter City Name . . .' />
                    <Image source={require('../../assets/images/delete-icon.png')} 
                    style={{width: 27, height: 30, resizeMode: 'contain'}}
                />
                </View>
                <Text style={rstyles.formviewtxt}>Intent</Text>
                <View style={rstyles.intentview}>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Dating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Travel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Experiences</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Romance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Emotional connection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity  onPress={() => {
                 props.navigation.navigate({routeName: 'RegisterFour'});
                }} style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepThree;