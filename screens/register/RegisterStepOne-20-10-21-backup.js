import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

const RegisterStepOne = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [username, _username] = useState('');

    const emailHandler = (enteredEmail) => {
        _email(enteredEmail);
    };

    const passHandler = (enteredPass) => {
        _password(enteredPass);
    };
    const userHandler = (enteredUsername) => {
        _username(enteredUsername);
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
                                value={username}
                            />
                            <Image source={require('../../assets/images/man-icon.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={rstyles.inputarea}>
                            <TextInput placeholder='Enter Email...'
                                style={rstyles.inputtext}
                                onChangeText={emailHandler}
                                value={email}
                            />
                            <Image source={require('../../assets/images/mail_icon.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={rstyles.inputarea}>
                            <TextInput placeholder='Enter Password'
                                style={rstyles.inputtext}
                                onChangeText={passHandler}
                                value={password}
                            />
                            <Image source={require('../../assets/images/pass-icon.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </View>
                    </View>
                    {/* <TouchableOpacity onPress={emailCheckHandler} style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity> */}

                </ScrollView>
                <View style={rstyles.btnview}>
                    <TouchableOpacity onPress={() =>
                        props.navigation.navigate('RegisterTwo', {
                            param: {
                                "email": email,
                                "password": password,
                                "username": username
                            }
                        })

                    } style={rstyles.btncontainer2}>
                        <Text style={rstyles.btntext}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RegisterStepOne;

