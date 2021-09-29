import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Platform } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

const RegisterStepTwo = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');

  const selectMan = () => {
    _gender ('Man')
  };

  const selectWoman = () => {
    _gender ('Woman')
  };

  const lookingMan = () => {
    _looking ('Man')
  };

  const lookingWoman = () => {
    _looking ('Woman')
  };    
  
  React.useEffect(()=>{
    console.log(props.navigation.state.params.param.email, "+++++++props email"),
    console.log(props.navigation.state.params.param.password, "+++++++props pass"),
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password)

  },[])

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
                        <TouchableOpacity onPress={lookingMan} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={lookingWoman} style={rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={rstyles.chckimg}></Image>
                            <Text style={rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity 
            onPress={() =>
                props.navigation.navigate('RegisterThree', {
                param: {
                    "email": email, 
                    "password": password, 
                    "gender": gender, 
                    "looking": looking 
                }
                })}
            style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/bg3.jpg')} 
            style={{resizeMode: 'cover'}}
            />
        </View>
    );
};

export default RegisterStepTwo;

