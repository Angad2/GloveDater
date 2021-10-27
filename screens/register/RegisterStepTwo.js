
import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

const RegisterStepTwo = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [username, _username] = useState('');
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
  
  
//   const selectGen = () => {
//         if(selectGen == selectMan){
//             selectMan()
//         } else if(selectGen == selectWoman){
//             selectWoman()
//         }
//   };
  
  React.useEffect(()=>{
    console.log(props.navigation.state.params.param.email, "+++++++props email"),
    console.log(props.navigation.state.params.param.password, "+++++++props pass"),
    console.log(props.navigation.state.params.param.username, "+++++++props username"),
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password),
    _username(props.navigation.state.params.param.username)

  },[])

    return(
        <View style={styles.imageview}>
            <ImageBackground source={require('../../assets/images/bg3.jpg')}
                style={{ resizeMode: 'cover', flex: 1, width: '100%', height: '100%', zIndex: 0 }} >
                <ScrollView>
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
            </ScrollView>
            <View style={rstyles.btnview}>
            <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate('RegisterThree', {
                                param: {
                                    "email": email,
                                    "password": password,
                                    "username": username,
                                    "gender": gender,
                                    "looking": looking
                                }
                            })}
                        style={rstyles.btncontainer2}>
                        <Text style={rstyles.btntext}>Continue</Text>
                    </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    );
};

export default RegisterStepTwo;