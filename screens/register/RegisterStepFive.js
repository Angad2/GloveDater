import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Header from '../../components/Header';

const RegisterStepFive = props => {

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
    const [lookingFor, _lookingFor] = useState('');
    const [favtravelSpot, _favtravelSpot] = useState('');
    const [favBarResto, _favBarResto] = useState('');
    const [favDreamExpo, _favDreamExpo] = useState('');

    const travelHandler = (enteredTravelSpot) => {
        _favtravelSpot(enteredTravelSpot);
    };

    const restoHandler = (enteredRestobar) => {
        _favBarResto(enteredRestobar);
    };
    const favDreamHandler = (enteredDream) => {
        _favDreamExpo(enteredDream);
    };

    

    React.useEffect(() => {
            console.log(props.route.params.param.ageValue, "+++++++props Age"),
            console.log(props.route.params.param.bodyValue, "+++++++props Body type"),
            console.log(props.route.params.param.heightValue, "+++++++props Height"),
            console.log(props.route.params.param.hairValue, "+++++++props Hair type"),
            console.log(props.route.params.param.ethnicityValue, "+++++++props EthnicityValue"),
            console.log(props.route.params.param.intentValue, "+++++++props intentValue"),
            console.log(props.route.params.param.about, "+++++++props About Me"),
            console.log(props.route.params.param.lookingFor, "+++++++props Looking For"),

            _email(props.route.params.param.email),
            _password(props.route.params.param.password),
            _User_name(props.route.params.param.User_name),
            _gender(props.route.params.param.gender),
            _looking(props.route.params.param.looking),
            _country(props.route.params.param.country),
            _city(props.route.params.param.city),
            _intentArr(props.route.params.param.intentArr),
            _ageValue(props.route.params.param.ageValue),
            _bodyValue(props.route.params.param.bodyValue),
            _heightValue(props.route.params.param.heightValue),
            _hairValue(props.route.params.param.hairValue),
            _ethnicityValue(props.route.params.param.ethnicityValue),
            _intentValue(props.route.params.param.intentValue),
            _about(props.route.params.param.about),
            _lookingFor(props.route.params.param.lookingFor)

    }, [])

    return (
        <View style={styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate('RegisterFour')}} title="Profile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Favorite travel spot</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="What is your favourite travel spot ? And Why?"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={travelHandler}
                        value={favtravelSpot}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Favorite bar/restaurant</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Favorite bar/restaurant"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={restoHandler}
                        value={favBarResto}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
                <Text style={rstyles.formviewtxt}>Future dream experiencer</Text>
                <View style={rstyles.txtareabox}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="I want..."
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={favDreamHandler}
                        value={favDreamExpo}
                        style={rstyles.textarae}>
                    </TextInput>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() =>
                    props.navigation.navigate('UploadPage', {
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
                            "favtravelSpot": favtravelSpot,
                            "favBarResto": favBarResto,
                            "favDreamExpo": favDreamExpo
                        }
                    })}
                    style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue..</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepFive;