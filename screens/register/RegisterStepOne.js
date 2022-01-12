import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Regex from '../../screens/register/RegexMatch';

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

   


    const validationSubmit = () => {

        if(User_name.trim() != '') {
            if (!User_name.trim().match(Regex.VALID_NAME)) {
                _isUserValidationError(true);
                //email.focus();
                return;
            } else {
                _isUserValidationError(false);
                _isUserError(false);
            }
            }
            if(!User_name.trim()) {
                Alert.alert('Please Enter User Name');
                return;
            }

        if(email.trim() != '') {
            if (!email.trim().match(Regex.VALID_EMAIL)) {
                _isEmailValidationError(true);
                //email.focus();
                return;
            } else {
                _isEmailValidationError(false);
                _isEmailError(false);
            }
            }
            if(!email.trim()) {
                Alert.alert('Please Enter Email');
                return;
            }

            if(password.trim() != '') {
                if (!password.trim().match(Regex.VALID_PASSWORD)) {
                    _isPassValidationError(true);
                    //email.focus();
                    return;
                } else {
                    _isPassValidationError(false);
                    _isPassError(false);
                }
                }
                if(!password.trim()) {
                    Alert.alert('Please Enter Password');
                    return;
                }

            props.navigation.navigate('RegisterTwo', {
                param: {
                    "email": email,
                    "password": password,
                    "User_name": User_name
                }
            })
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
                                password={true}
                                secureTextEntry={true}
                            />
                            <Image source={require('../../assets/images/pass-icon.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </View>
                    </View>
                </ScrollView>
                {/* <View style={rstyles.btnview}>
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
                </View> */}
                <TouchableOpacity onPress={validationSubmit} >
                {(isEmailError || isEmailValidationError) && (
                    
                    <Text style={rstyles.errorMsg}>
                        {isEmailError
                            ? ''
                            : 'Email address is not valid'}
                    </Text>
                           
                )}
                {(isPassError || isPassValidationError) && (
                    
                    <Text style={rstyles.errorMsg}>
                        {isPassError
                            ? ''
                            : 'Password is not valid'}
                    </Text>
                           
                )}
                 {(isUserError || isUserValidationError) && (
                    
                    <Text style={rstyles.errorMsg}>
                        {isUserError
                            ? ''
                            : 'user name is not valid'}
                    </Text>
                           
                )}
                </TouchableOpacity> 
                 <View style={rstyles.btnview}>
                    <TouchableOpacity onPress={validationSubmit} 
                    style={rstyles.btncontainer2}>
                        <Text style={rstyles.btntext}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RegisterStepOne;

