import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import axios from 'axios';
import {BASE_URL} from '../../config';
import { loginUser } from '../../service';
import { showMessage } from 'react-native-flash-message';

import Regex from '../../screens/register/RegexMatch';

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
    
                    const user = await signUpUser(email, password, User_name, gender, looking, country, city, intentArr.join(","), ageValue, bodyValue, heightValue, hairValue, ethnicityValue, intentValue, about, lookingFor, favtravelSpot, favBarResto, favDreamExpo, photo);
              //setIsLoading(false);
              console.log(user, "++++++++++++++++user")
             console.log(user.data._id, "++++++++++++++++user")
             console.log(user.data.Email)
              if (!user) {
                showMessage({
                  message: "Error",
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                });
                return
              }
              else{
                showMessage({
                  message: "Signup sucessfull",
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                });            
               AsyncStorage.setItem("userId", user.data._id);
               AsyncStorage.setItem("token", user.data.Token);
               
                props.navigation.navigate('Home');
              }
            } catch (error) {
              //setIsLoading(false);
              showMessage({
                message: 'Something went wrong please try again later!',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              });

        }

        

            // props.navigation.navigate('Home', {
            //     param: {
            //         "email": email,
            //         "password": password
            //     }
            // })
    };

   
    return (
        <View navigation={props.navigation} style={styles.imageview}>
            <ImageBackground source={require('../../assets/images/bg2.jpg')}
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
                        <View>
                            <TouchableOpacity>
                                <Text>Not a member sign up here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
                </TouchableOpacity> 
                 <View style={rstyles.btnview}>
                    <TouchableOpacity onPress={validationSubmit} 
                    style={rstyles.btncontainer2}>
                        <Text style={rstyles.btntext}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

