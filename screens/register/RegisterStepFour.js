import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

import Header from '../../components/Header';
import AgeDropdown from '../../components/AgeDropdown';
import BodyDropdown from '../../components/BodyDropdown';
import HeightDropdown from '../../components/HeightDropdown';
import HairDropdown from '../../components/HairDropdown';
import EthnicityDropdown from '../../components/EthnicityDropdown';
import IntentDropdown from '../../components/IntentDropdown';

const RegisterStepFour = props => {
    return (
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterThree'});}} title="Propile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Basics</Text>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Age:</Text>
                        <AgeDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Body:</Text>
                        <BodyDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Height (cm):</Text>
                        <HeightDropdown />
                    </View>
                </View>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Hair:</Text>
                        <HairDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Ethnicity:</Text>
                        <EthnicityDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Height (cm):</Text>
                        <IntentDropdown />
                    </View>
                </View>
                <Text style={rstyles.formviewtxt}>About Me</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="About me"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Loking For</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="looking for..."
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    style={rstyles.textarae}>
                    </TextInput>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() => {
                 props.navigation.navigate({routeName: 'RegisterFive'});
                }} style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepFour;