import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Header from '../../components/Header';

const Upload = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [username, _username] = useState('');
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

    const uploadPhoto = () => {
        _photo('photo')
    };

    React.useEffect(() => {
            console.log(props.navigation.state.params.param.email, "+++++++props email"),
            console.log(props.navigation.state.params.param.password, "+++++++props pass"),
            console.log(props.navigation.state.params.param.username, "+++++++props username"),
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

            _email(props.navigation.state.params.param.email),
            _password(props.navigation.state.params.param.password),
            _username(props.navigation.state.params.param.username),
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
            _favDreamExpo(props.navigation.state.params.param.favDreamExpo)


    }, [])

    return (
        <View style={styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'RegisterFive' }); }} title="Upload" />
            <View style={rstyles.formview4}>
                <TouchableOpacity onPress={uploadPhoto} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                {/* <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => alert('Hello, world!')} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity> */}
            </View>
            <View style={rstyles.btnview}>
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate('Idpage', {
                            param: {
                                "email": email,
                                "password": password,
                                "username": username,
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
                                "favDreamExpo": favDreamExpo,
                                "photo": photo
                            }
                        })}
                    style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Upload;