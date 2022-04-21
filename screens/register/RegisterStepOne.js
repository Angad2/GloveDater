import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView, ToastAndroid } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Regex from '../../screens/register/RegexMatch';

import { emailCheck } from '../../service';

const RegisterStepOne = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');

    const [isEmailValidationError, _isEmailValidationError] = useState(false);
    const [isEmailError, _isEmailError] = useState(false);
    const [isPassValidationError, _isPassValidationError] = useState(false);
    const [isPassError, _isPassError] = useState(false);
    const [isUserValidationError, _isUserValidationError] = useState(false);
    const [isUserError, _isUserError] = useState(false);

    const emailHandler = (enteredEmail) => {
        _email(enteredEmail);
    };

    const passHandler = (enteredPass) => {
        _password(enteredPass);
    };
    const userHandler = (enteredUsername) => {
        _User_name(enteredUsername);
    };

    const [datas, _datas] = useState([]);
    
    const validationSubmit = async () => {
        
        try {
            if(User_name.trim() != '') {
                if (!User_name.trim().match(Regex.VALID_NAME)) {
                    ToastAndroid.show(
                        "User name is not Valid...",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    _isUserValidationError(true);
                    return;
                } else {
                    _isUserValidationError(false);
                    _isUserError(false);
                }
                }
                if(!User_name.trim()) {
                    ToastAndroid.show(
                        "Please Enter User Name...",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    return;
                }
    
            if(email.trim() != '') {
                if (!email.trim().match(Regex.VALID_EMAIL)) {
                    ToastAndroid.show(
                        "Email address is not Valid...",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    _isEmailValidationError(true);
                    return;
                }else {
                    
                    _isEmailValidationError(false);
                    _isEmailError(false);
                }
                }
                if(!email.trim()) {
                    ToastAndroid.show(
                        "Email is blank please enter...",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    return;
                }
    
                if(password.trim() != '') {
                    if (!password.trim().match(Regex.VALID_PASSWORD)) {
                        ToastAndroid.show(
                            "Password is not valid...",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER
                          );
                        _isPassValidationError(true);
                        return;
                    } else {
                        _isPassValidationError(false);
                        _isPassError(false);
                    }
                    }
                    if(!password.trim()) {
                        ToastAndroid.show(
                            "Please Enter Password...",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER
                          );
                        return;
                    }
                    const emaildata = await emailCheck(email);

                    if(emaildata.data.status === false){
                        ToastAndroid.show(
                            "Email already Exists",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER
                          );
                        return
                    } 

                    if(emaildata.data.status === true){
                        props.navigation.navigate('RegisterTwo', {
                            param: {
                                "email": email,
                                "password": password,
                                "User_name": User_name
                            }
                        })
                    }
                     
                    else{
                        
                    } 
                   
            
          } catch (err) {
            console.log("hhhhh",err);
          }   
    };

   
    return (
        <View style={styles.imageview}>
            <ImageBackground source={require('../../assets/images/bg2.jpg')}
                style={{ resizeMode: 'cover', flex: 1, width: '100%', height: '100%', }} >
                <ScrollView>
                    <View style={rstyles.logo}>
                        <Image source={require('../../assets/images/logo.png')}
                            style={rstyles.logosize}
                        />
                    </View>
                    <View style={rstyles.textview}>
                        <Text style={rstyles.logotext}>Sign up to date globally</Text>
                    </View>
                    <View style={rstyles.formview}>
                        <View style={rstyles.inputarea}>
                            <TextInput placeholder='Enter Usernamel...'
                                style={rstyles.inputtext}
                                onChangeText={userHandler}
                                value={User_name}
                            />
                            <Image source={require('../../assets/images/man-icon.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={rstyles.inputarea}>
                            <TextInput placeholder='Enter Email...'
                                style={rstyles.inputtext}
                                onChangeText={emailHandler}
                                value={email}
                            />
                            <Image source={require('../../assets/images/mail_icon.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain' }}
                            />
                        </View>       
                        <View style={rstyles.inputarea}>
                            <TextInput placeholder='Enter Password'
                                style={rstyles.inputtext}
                                onChangeText={passHandler}
                                value={password}
                                password={true}
                                secureTextEntry={true}
                            />
                            <Image source={require('../../assets/images/pass-icon.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain' }}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress= {() => {props.navigation.navigate('Login')}}>
                                <Text style={rstyles.hlinktxt}>Already a member? sign in here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[rstyles.btnview,styles.mt30]}>
                    <TouchableOpacity onPress={validationSubmit} 
                        style={rstyles.btncontainer2}>
                        <Text style={rstyles.btntext}>Continue</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                {/* <TouchableOpacity onPress={validationSubmit} >
                </TouchableOpacity>  */}
            </ImageBackground>
        </View>
    );
};

export default RegisterStepOne;

