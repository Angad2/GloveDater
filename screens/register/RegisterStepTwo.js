
import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Dimensions, Alert, ImageBackground, SafeAreaView } from 'react-native';
import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

const RegisterStepTwo = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');
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
    console.log(props.navigation.state.params.param.User_name, "+++++++props username"),
    
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password),
    _User_name(props.navigation.state.params.param.User_name)

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
                        <TouchableOpacity onPress={selectMan} style={gender==="Man"? rstyles.selectCheck:rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={gender==="Man"? rstyles.chckimgstyle:rstyles.chckimg}></Image>
                            <Text style={gender==="Man"? rstyles.chktxted:rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectWoman} style={gender==="Woman"? rstyles.selectCheck:rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={gender==="Woman"? rstyles.chckimgstyle:rstyles.chckimg}></Image>
                            <Text style={gender==="Woman"? rstyles.chktxted:rstyles.chktxt}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={rstyles.checkarea}>
                    <Text style={rstyles.checktitle}>Looking to date a...</Text>
                    <View style={rstyles.checkboxarae}>
                        <TouchableOpacity onPress={lookingMan} style={looking==="Man"? rstyles.selectCheck:rstyles.checkbtn}>
                            <Image source={require('../../assets/images/men-icon.png')} 
                            style={looking==="Man"? rstyles.chckimgstyle:rstyles.chckimg}></Image>
                            <Text style={looking==="Man"? rstyles.chktxted:rstyles.chktxt}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={lookingWoman} style={looking==="Woman"? rstyles.selectCheck:rstyles.checkbtn}>
                            <Image source={require('../../assets/images/women-icon.png')} 
                            style={looking==="Woman"? rstyles.chckimgstyle:rstyles.chckimg}></Image>
                            <Text style={looking==="Woman"? rstyles.chktxted:rstyles.chktxt}>Woman</Text>
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
                                    "User_name": User_name,
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