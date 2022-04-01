import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, ToastAndroid } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import axios from 'axios';
import { BASE_URL } from '../../config';
import { loginUser } from '../../service';
import { showMessage } from 'react-native-flash-message';

import Regex from '../../screens/register/RegexMatch';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
    const [email, _email] = useState('');
    const [password, _password] = useState('');

    const [isEmailValidationError, _isEmailValidationError] = useState(false);
    const [isEmailError, _isEmailError] = useState(false);
    const [isPassValidationError, _isPassValidationError] = useState(false);
    const [isPassError, _isPassError] = useState(false);

    const emailHandler = (enteredEmail) => {
        _email(enteredEmail);
    };

    const passHandler = (enteredPass) => {
        _password(enteredPass);
    };

    const validationSubmit = async () => {
        try {
            if (email.trim() != '') {
                if (!email.trim().match(Regex.VALID_EMAIL)) {
                    ToastAndroid.show(
                        "Email address is not Valid...",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                    _isEmailValidationError(true);
                    return;
                } else {
                    _isEmailValidationError(false);
                    _isEmailError(false);
                }
            }
            if (!email.trim()) {
                ToastAndroid.show(
                    "Please Enter Email",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER
                );
                return;
            } else {
                _isPassValidationError(false);
                _isPassError(false);
            }

            if (password.trim() != '') {
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
            if (!password.trim()) {
                ToastAndroid.show(
                    "Please Enter Password...",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER
                );
                return;
            }

            const user = await loginUser(email, password);
            console.log(user.data, "++++++++++++++++user data id")
            if (!user) {
                showMessage({
                    message: "Error",
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                });
                return
            }
            else {
                showMessage({
                    message: "Signup sucessfull",
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                });
                AsyncStorage.setItem("userId", user.data.data.Id);
                AsyncStorage.setItem("user", JSON.stringify(user.data.data));
                AsyncStorage.setItem("token", user.data.token);

                props.navigation.navigate('Feed');
            }
        } catch (error) {
            //setIsLoading(false);
            showMessage({
                message: 'Something went wrong please try again later!',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
            });

        }
    };


    return (
        <View navigation={props.navigation} style={styles.imageview}>
            <ImageBackground source={require('../../assets/images/bg2.jpg')}
                // blurRadius={2}
                style={{ resizeMode: 'cover', flex: 1, width: '100%', height: '100%', }} >
                <ScrollView>
                    <View style={rstyles.logo}>
                        <Image source={require('../../assets/images/logo.png')}
                            style={rstyles.logosize}
                        />
                    </View>
                    <View style={rstyles.textview}>
                        <Text style={rstyles.logotext}>Sign in to date globally</Text>
                    </View>
                    <View style={rstyles.formview}>
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
                            />
                            <Image source={require('../../assets/images/pass-icon.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain' }}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'Register' }) }}>
                                <Text style={rstyles.hlinktxt}>Not a member sign up here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[rstyles.btnview, styles.mt30]}>
                        <TouchableOpacity onPress={validationSubmit}
                            style={rstyles.btncontainer2}>
                            <Text style={rstyles.btntext}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/* <TouchableOpacity onPress={validationSubmit} >
                </TouchableOpacity> */}
                {/* <View style={rstyles.btnview}>
                    <View style={[rstyles.btnview, styles.mt25]}>
                        <TouchableOpacity onPress={validationSubmit}
                            style={rstyles.btncontainer2}>
                            <Text style={rstyles.btntext}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </ImageBackground>
        </View>
    );
};

export default Login;

