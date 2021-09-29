import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IdentityUper from '../../components/IdentityUper';
import IdentityLower from '../../components/IdentityLower';

import Styles from '../../constants/globalstyle';
import axios from 'axios';

const Identitypage = props => {
    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intentArr, _intentArr] = useState([]);
    const [ageValue, _ageValue] = useState();
    const [bodyValue, _bodyValue] = useState();
    const [heightValue, _heightValue] = useState();
    const [hairValue, _hairValue] = useState();
    const [ethnicityValue, _ethnicityValue] = useState();
    const [intentValue, _intentValue] = useState();
    const [about, _about] = useState();
    const [lookingFor, _lookingFor] = useState();
    const [favtravelSpot, _favtravelSpot] = useState();
    const [favBarResto, _favBarResto] = useState();
    const [favDreamExpo, _favDreamExpo] = useState();
    const [photo, _photo] = useState();

    React.useEffect(() => {
        console.log(props.navigation.state.params.param.email, "+++++++props email"),
            console.log(props.navigation.state.params.param.password, "+++++++props pass"),
            console.log(props.navigation.state.params.param.gender, "+++++++props gender"),
            console.log(props.navigation.state.params.param.looking, "+++++++props looking for"),
            console.log(props.navigation.state.params.param.country, "+++++++props Country"),
            console.log(props.navigation.state.params.param.city, "+++++++props city"),
            console.log(props.navigation.state.params.param.intentArr, "+++++++props Intent_option"),
            console.log(props.navigation.state.params.param.ageValue, "+++++++props Age"),
            console.log(props.navigation.state.params.param.bodyValue, "+++++++props Body type"),
            console.log(props.navigation.state.params.param.heightValue, "+++++++props Height"),
            console.log(props.navigation.state.params.param.hairValue, "+++++++props Hair type"),
            console.log(props.navigation.state.params.param.ethnicityValue, "+++++++props EthnicityValue"),
            console.log(props.navigation.state.params.param.intentValue, "+++++++props intentValue"),
            console.log(props.navigation.state.params.param.about, "+++++++props About Me"),
            console.log(props.navigation.state.params.param.lookingFor, "+++++++props Looking For"),
            console.log(props.navigation.state.params.param.favtravelSpot, "+++++++props My Favourite Spot"),
            console.log(props.navigation.state.params.param.favBarResto, "+++++++props My Favourite Bar"),
            console.log(props.navigation.state.params.param.favDreamExpo, "+++++++props My Favourite Dream"),
            console.log(props.navigation.state.params.param.photo, "+++++++props Photo"),

            _email(props.navigation.state.params.param.email),
            _password(props.navigation.state.params.param.password),
            _gender(props.navigation.state.params.param.gender),
            _looking(props.navigation.state.params.param.looking),
            _country(props.navigation.state.params.param.country),
            _city(props.navigation.state.params.param.city),
            _intentArr(props.navigation.state.params.param.intentArr),
            _ageValue(props.navigation.state.params.param.ageValue),
            _bodyValue(props.navigation.state.params.param.bodyValue),
            _heightValue(props.navigation.state.params.param.heightValue),
            _hairValue(props.navigation.state.params.param.hairValue),
            _ethnicityValue(props.navigation.state.params.param.ethnicityValue),
            _intentValue(props.navigation.state.params.param.intentValue),
            _about(props.navigation.state.params.param.about),
            _lookingFor(props.navigation.state.params.param.lookingFor)
            _favtravelSpot(props.navigation.state.params.param.favtravelSpot),
            _favBarResto(props.navigation.state.params.param.favBarResto),
            _favDreamExpo(props.navigation.state.params.param.favDreamExpo),
            _photo(props.navigation.state.params.param.photo)


    }, [])

    return (
        <View style={Styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'UploadPage'});}} title="Identity verification" />
            <ScrollView style={{marginBottom: 70,}}>
                <View>
                <IdentityUper />
            <IdentityLower
            onSelect = {() =>{ props.navigation.navigate({routeName: 'Home'});

            let formData = new FormData();
            formData.append('Email', email);
            formData.append('Password', password);
            formData.append('Gender', gender);
            formData.append('Looking_to_date_a', looking);
            formData.append('Country', country);
            formData.append('City', city);
            formData.append('Intent_option', intentArr);
            formData.append('Age', ageValue);
            formData.append('Body', bodyValue);
            formData.append('Height', heightValue);
            formData.append('Hair', hairValue);
            formData.append('Ethnicity', ethnicityValue);
            formData.append('Intent', intentValue);
            formData.append('About_me', about);
            formData.append('Looking_for', lookingFor);
            formData.append('Favorite_travel_spot', favtravelSpot);
            formData.append('Favorite_restaurnt', favBarResto);
            formData.append('Future_dream_experience', favDreamExpo);
            formData.append('Photo', photo);
            
            axios.post("http://111.93.169.90:8484/V1/Signup",
            {
                "Email": email,
                "Password": password,
                "Gender": gender,
                "Looking_to_date_a": looking,
                "Country": country,
                "City": city,
                "Intent_option": intentArr,
                "Age": ageValue,
                "Body": bodyValue,
                "Height": heightValue,
                "Hair": hairValue,
                "Ethnicity": ethnicityValue,
                "Intent": intentValue,
                "About_me": about,
                "Looking_for": lookingFor,
                "Favorite_travel_spot": favtravelSpot,
                "Favorite_restaurnt": favBarResto,
                "Future_dream_experience": favDreamExpo,
                "Photo": photo
            }
            ).then(result=>{
                console.log(result)
            })
        }}
             />
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

export default Identitypage;