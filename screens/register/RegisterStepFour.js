import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, Picker } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

//import { Picker } from '@react-native-picker/picker';
//import {Picker} from '@react-native-community/picker';


import Header from '../../components/Header';

const RegisterStepFour = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intentArr, _intentArr] = useState([]);
    const [ageValue, _ageValue] = useState('');
    const [bodyValue, _bodyValue] = useState('');
    const [heightValue, _heightValue] = useState('');
    const [hairValue, _hairValue] = useState('');
    const [ethnicityValue, _ethnicityValue] = useState('');
    const [intentValue, _intentValue] = useState('');
    const [about, _about] = useState('');
    const [lookingFor, _lookingFor] = useState ('');

    const intens = [
        {"name":"dating","value":"Dating"},
        {"name":"travel","value":"Travel"},
        {"name":"experiences","value":"Experiences"},
        {"name":"romance","value":"Romance"},
        {"name":"emotional","value":"Emotional"},
        {"name":"open","value":"Open"},
        {"name":"nsa","value":"NSA"},
        {"name":"fwb","value":"FWB"},
        {"name":"shortterm","value":"Short term"},
        {"name":"longterm","value":"Longterm"},
        {"name":"arrangement","value":"Arrangement"},
    ]
    const selectIntent = (enterIntent) => {   
        if(intentArr.indexOf(enterIntent) === -1)  {
            _intentArr([...intentArr, enterIntent])
        }
        
        console.log(intentArr, "+++++++++++++intent");
    
      };
    const age = [
        { name: 'Select' },
        { name: '18' },
        { name: '19' },
        { name: '20' }
    ];

    const body = [
        { name: 'Select' },
        { name: 'Tall' },
        { name: 'Average' },
        { name: 'Short' }
    ];

    const heights = [
        { name: 'Select' },
        { name: '160' },
        { name: '165' },
        { name: '170' },
        { name: '175' }
    ];

    const hair = [
        { name: 'Select' },
        { name: 'Black' },
        { name: 'Brown' },
        { name: 'Golden' },
        { name: 'White' }
    ];

    const ethnicity = [
        { name: 'Select' },
        { name: 'Rocking' },
        { name: 'Cool' },
        { name: 'Very Cool' },
        { name: 'Smart' }
    ];

    const inttentd = [
        { name: 'Select' },
        { name: 'Open' },
        { name: 'Cool' },
        { name: 'Very Cool' },
        { name: 'Smart' }
    ];

    const aboutHandler = (enteredAbout) => {
        _about(enteredAbout);
    };

    const lookingfHandler = (enteredLookingf) => {
        _lookingFor(enteredLookingf);
    };
    React.useEffect(() => {
            console.log(props.navigation.state.params.param.country, "+++++++props Country"),
            console.log(props.navigation.state.params.param.city, "+++++++props city"),
            console.log(props.navigation.state.params.param.intentArr, "+++++++props Intent_option"),
            _email(props.navigation.state.params.param.email),
            _password(props.navigation.state.params.param.password),
            _User_name(props.navigation.state.params.param.User_name),
            _gender(props.navigation.state.params.param.gender),
            _looking(props.navigation.state.params.param.looking),
            _country(props.navigation.state.params.param.country),
            _city(props.navigation.state.params.param.city),
            _intentArr(props.navigation.state.params.param.intentArr)

    }, [])
    return (
        <View style={styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'RegisterThree' }); }} title="Profile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Basics</Text>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Age:</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                ageValue={ageValue}
                                onValueChange={(itemValue, itemIndex) => _ageValue(itemValue)}
                                //mode="dropdown"
                            >
                                {age.map((age, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={age.name}
                                        value={age.name}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Body:</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                bodyValue={bodyValue}
                                onValueChange={(itemValue, itemIndex) => _bodyValue(itemValue)}
                            >
                                {body.map((body, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={body.name}
                                        value={body.name}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Height (cm):</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                heightValue={heightValue}
                                onValueChange={(itemValue, itemIndex) => _heightValue(itemValue)}
                            >
                                {heights.map((heights, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={heights.name}
                                        value={heights.name}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={rstyles.dropdownarea}>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Hair:</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                hairValue={hairValue}
                                onValueChange={(itemValue, itemIndex) => _hairValue(itemValue)}
                            >
                                {hair.map((hair, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={hair.name}
                                        value={hair.name}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Ethnicity:</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                ethnicityValue={ethnicityValue}
                                onValueChange={(itemValue, itemIndex) => _ethnicityValue(itemValue)}
                            >
                                {ethnicity.map((ethnicity, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={ethnicity.name}
                                        value={ethnicity.name}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={rstyles.dropdownbox}>
                        <Text style={rstyles.chktxt}>Intent:</Text>
                        <View style={styles.dropdown} >
                            <Picker
                                intentValue={intentValue}
                                onValueChange={(itemValue, itemIndex) => _intentValue(itemValue)}
                            >
                                {inttentd.map((inttentd, key) => (
                                    <Picker.Item
                                        key={key}
                                        label={inttentd.name}
                                        value={inttentd.name}
                                    />
                                ))}
                            </Picker>
                        </View>
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
                        onChangeText={aboutHandler}
                        value={about}
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
                        onChangeText={lookingfHandler}
                        value={lookingFor}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() =>
                    props.navigation.navigate('RegisterFive', {
                        param: {
                            "email": email,
                            "password": password,
                            "User_name": User_name,
                            "gender": gender,
                            "looking": looking,
                            "country": country,
                            "city": city,
                            "intentArr": intentArr,
                            "ageValue": ageValue,
                            "bodyValue": bodyValue,
                            "heightValue": heightValue,
                            "hairValue": hairValue,
                            "ethnicityValue": ethnicityValue,
                            "intentValue": intentValue,
                            "about": about,
                            "lookingFor": lookingFor,
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