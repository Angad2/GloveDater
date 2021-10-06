import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

// import axios from 'axios';
// import {BASE_URL} from '../../config';
// import { signUpUser } from '../../service';
// import { showMessage } from 'react-native-flash-message';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterStepOne = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');

    const emailHandler = (enteredEmail) => {
        _email(enteredEmail);
    };

    const passHandler = (enteredPass) => {
        _password(enteredPass);
    };

//   const addHandler = () => {
//         axios.post('http://111.93.169.90:8484/V1/Signup', {
//         Email: enterEmail,
//         Password: enterPass
//     })
//     .then(function (response) {
//         console.log(response);
//         props.navigation.navigate({routeName: 'RegisterTwo'});
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//   };

// React.useEffect(() => {
    
// }, [])

// const emailCheckHandler = async () => {
//     try {   
     
//       const user = await signUpUser(email, password, gender, looking, country, city, intentArr.join(","), ageValue, bodyValue, heightValue, hairValue, ethnicityValue, intentValue, about, lookingFor, favtravelSpot, favBarResto, favDreamExpo, photo);
//       console.log(user.data, "++++++++++++++++user")
//       console.log(user.data._id, "++++++++++++++++user")
//       if (!user) {
//           Alert.alert("Email is already exist")
//         // showMessage({
//         //   message: "Error",
//         //   backgroundColor: 'rgba(0, 0, 0, 0.8)'
//         // });
//         return
//       }
//       else{
//         // showMessage({
//         //   message: "Signup sucessfull",
//         //   backgroundColor: 'rgba(0, 0, 0, 0.8)'
//         // });
//         Alert.alert("Success")            
//         AsyncStorage.setItem("userId", user.data._id);
//         props.navigation.navigate({routeName: 'RegisterTwo'});
//       }
//     } catch (error) {
//       //setIsLoading(false);
//       //Alert.alert("somthin went wrong")
//       showMessage({
//         message: 'Something went wrong please try again later!',
//         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//       });
//     }
//   }
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
                    value={email}
                    />
                    <Image source={require('../../assets/images/mail_icon.png')} 
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
                </View>
                <View style={rstyles.inputarea}>
                    <TextInput placeholder='Enter Password' 
                    style={rstyles.inputtext} 
                    onChangeText={passHandler}
                    value={password}
                    />
                    <Image source={require('../../assets/images/pass-icon.png')} 
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
                </View>
            </View>
            {/* <TouchableOpacity onPress={emailCheckHandler} style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity onPress={() =>
                props.navigation.navigate('RegisterTwo', {
                param: {
                    "email": email, 
                    "password": password}
                })
                
            } style={rstyles.btncontainer}>
                <Text style={rstyles.btntext}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/bg2.jpg')} 
            style={{resizeMode: 'cover'}}
            />
        </View>
    );
};

export default RegisterStepOne;

