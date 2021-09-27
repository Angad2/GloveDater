import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Header from '../../components/Header';

const RegisterStepFive = props => {
    return (
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterFour'});}} title="Propile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Favorite travel spot</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="What is your favourite travel spot ? And Why?"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Favorite bar/restaurant</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Favorite bar/restaurant"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Future dream experiencer</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="I want..."
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    style={rstyles.textarae}>
                    </TextInput>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() => {
                 props.navigation.navigate({routeName: 'UploadPage'});
                }} style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepFive;