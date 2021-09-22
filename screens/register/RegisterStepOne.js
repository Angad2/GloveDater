import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
// const { height } = Dimensions.get('window');

const RegisterStepOne = props => {

    const [enterEmail, setEmail] = useState('');
    const [enterPass, setPass] = useState('');

    const emailHandler = (enteredEmail) => {
        setEmail(enteredEmail);
    };

    const passHandler = (enteredPass) => {
        setPass(enteredPass);
    };

  const addHandler = () => {
    console.log(enterEmail);
    console.log(enterPass);
  };

    return(
        <View style={styles.imageview}>
            <View style={rstyles.logo}>
                <Image source={require('../../assets/images/logo.png')} 
                style={rstyles.logosize}
                />
            </View>
            <View style={rstyles.textview}>
                <Text style={rstyles.logotext}>Sign up to date globally</Text>
            </View>
            {/* <ScrollView style={styles.scrollarae}>
            
            </ScrollView> */}
            <View style={rstyles.formview}>
                <View style={rstyles.inputarea}>
                    <TextInput placeholder='Enter Email...' 
                    style={rstyles.inputtext} 
                    onChangeText={emailHandler}
                    value={enterEmail}
                    />
                    <Image source={require('../../assets/images/mail_icon.png')} 
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
                </View>
                <View style={rstyles.inputarea}>
                    <TextInput placeholder='Enter Password' 
                    style={rstyles.inputtext} 
                   onChangeText={passHandler}
                    value={enterPass}
                    />
                    <Image source={require('../../assets/images/pass-icon.png')} 
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => {
                 props.navigation.navigate({routeName: 'RegisterTwo'});
                }} style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={addHandler} 
            style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/bg2.jpg')} 
            style={{resizeMode: 'cover'}}
            />
        </View>
    );
};

export default RegisterStepOne;

