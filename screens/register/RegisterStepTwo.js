import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Platform } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

const RegisterStepTwo = props => {
    const [Gender, setGender] = useState('');
    const [Looking, setLooking] = useState('');

    const addHandler = () => {
        axios.post('http://111.93.169.90:8484/V1/Signup', {
        Gender: Gender,
        Looking_to_date_a: Looking
    })
    .then(function (response) {
        console.log(response);
        props.navigation.navigate({routeName: 'RegisterThree'});
    })
    .catch(function (error) {
        console.log(error);
    });
  };

  const selectMan = () => {
    setGender ('Man')
  };

  const selectWoman = () => {
    setGender ('Woman')
  };  

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
                        <TouchableOpacity onPress={selectMan} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectWoman} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={rstyles.checkarea}>
                    <Text style={rstyles.checktitle}>Looking to date a...</Text>
                    <View style={rstyles.checkboxarae}>
                        <TouchableOpacity onPress={() => setLooking ('Man')} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setLooking('Women')} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={addHandler} style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/bg3.jpg')} 
            style={{resizeMode: 'cover'}}
            />
        </View>
    );
};

export default RegisterStepTwo;

