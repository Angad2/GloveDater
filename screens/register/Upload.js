import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
import hometabstyles from '../home/hometabstyles';

import Header from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';


const Upload = props => {
    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');
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
    //const [photo, _photo] = useState();
    const [image, setImage] = useState([]);
    const [gallery_photos, _gallery_photos] = useState('');

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result, "----------- GalPhoto");

        if (!result.cancelled) {
            const images = [...image, result.uri]
            setImage(images);
        }
    };

    const deletPhoto = (img) => {
        console.log(image);
        console.log(img);
        //image.pop(image);
        let images = image;
        delete images[img];
        // console.log(images, images.filter(( element ) => {
        //     return element !== undefined;
        //  }));
        setImage(images.filter(( element ) => {
            return element !== undefined;
         }))
    };


    React.useEffect(() => {
            // console.log(props.route.params.param.email, "+++++++props email"),
            // console.log(props.route.params.param.password, "+++++++props pass"),
            // console.log(props.route.params.param.User_name, "+++++++props username"),
            // console.log(props.route.params.param.gender, "+++++++props gender"),
            // console.log(props.route.params.param.looking, "+++++++props looking for"),
            // console.log(props.route.params.param.country, "+++++++props Country"),
            // console.log(props.route.params.param.city, "+++++++props city"),
            // console.log(props.route.params.param.intentArr, "+++++++props Intent_option"),
            // console.log(props.route.params.param.ageValue, "+++++++props Age"),
            // console.log(props.route.params.param.bodyValue, "+++++++props Body type"),
            // console.log(props.route.params.param.heightValue, "+++++++props Height"),
            // console.log(props.route.params.param.hairValue, "+++++++props Hair type"),
            // console.log(props.route.params.param.ethnicityValue, "+++++++props EthnicityValue"),
            // console.log(props.route.params.param.intentValue, "+++++++props intentValue"),
            // console.log(props.route.params.param.about, "+++++++props About Me"),
            // console.log(props.route.params.param.lookingFor, "+++++++props Looking For"),
            console.log(props.route.params.param.favtravelSpot, "+++++++props My Favourite Spot"),
            console.log(props.route.params.param.favBarResto, "+++++++props My Favourite Bar"),
            console.log(props.route.params.param.favDreamExpo, "+++++++props My Favourite Dream"),


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
            _favtravelSpot(props.route.params.param.favtravelSpot),
            _favBarResto(props.route.params.param.favBarResto),
            _favDreamExpo(props.route.params.param.favDreamExpo),
            _gallery_photos (props.route.params.param.gallery_photos)


    }, [])

    return (
        <View style={styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate('RegisterFive')}} title="Upload" />
                    <View style={rstyles.formview4}>
                        {image && image.map((img, index) => (
                        <View key={img}>
                            <TouchableOpacity onPress={() => {deletPhoto(index)}} style={styles.deleteBtn}>
                                <View>
                                <Image source={require('../../assets/images/delete-icon.png')}
                                    style={{ width: 27, height: 30, resizeMode: 'contain', }}
                                />
                                </View>
                               
                            </TouchableOpacity>
                            {image && <Image source={{ uri: img }} style={hometabstyles.thumnailimage} />}
                        </View>
                        )
                    )}

                <TouchableOpacity onPress={pickImage} style={rstyles.uploadbox}>
                    <Image source={require('../../assets/images/plus.png')} />
                </TouchableOpacity>
            </View>
            <View style={rstyles.btnview}>
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate('Idpage', {
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
                                "favDreamExpo": favDreamExpo,
                                //"photo": photo,
                                "gallery_photos": image
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