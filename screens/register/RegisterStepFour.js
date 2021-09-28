import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

import Header from '../../components/Header';
import AgeDropdown from '../../components/AgeDropdown';
import BodyDropdown from '../../components/BodyDropdown';
import HeightDropdown from '../../components/HeightDropdown';
import HairDropdown from '../../components/HairDropdown';
import EthnicityDropdown from '../../components/EthnicityDropdown';
import IntentDropdown from '../../components/IntentDropdown';

const RegisterStepFour = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('')
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intent, _intent] = useState('')

  React.useEffect(()=>{
    console.log(props.navigation.state.params.param.email, "+++++++props email"),
    console.log(props.navigation.state.params.param.password, "+++++++props pass"),
    console.log(props.navigation.state.params.param.gender, "+++++++props gender"),
    console.log(props.navigation.state.params.param.looking, "+++++++props looking for"),
    console.log(props.navigation.state.params.param.country, "+++++++props Country"),
    console.log(props.navigation.state.params.param.city, "+++++++props city"),
    console.log(props.navigation.state.params.param.intent, "+++++++props intent"),
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password),
    _gender(props.navigation.state.params.param.gender),
    _looking(props.navigation.state.params.param.looking)

  },[])
    return (
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterThree'});}} title="Propile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Basics</Text>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Age:</Text>
                        <AgeDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Body:</Text>
                        <BodyDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Height (cm):</Text>
                        <HeightDropdown />
                    </View>
                </View>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Hair:</Text>
                        <HairDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Ethnicity:</Text>
                        <EthnicityDropdown />
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Height (cm):</Text>
                        <IntentDropdown />
                    </View>
                </View>
                <Text style={rstyles.formviewtxt}>About Me</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="About me"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Loking For</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="looking for..."
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    style={rstyles.textarae}>
                    </TextInput>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() =>
                props.navigation.navigate('RegisterFour', {
                param: {
                    "email": email, 
                    "password": password, 
                    "gender": gender, 
                    "looking": looking,
                    "country": country,
                    "city": city,
                    "intent": intent
                    }
                })}
                    style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepFour;