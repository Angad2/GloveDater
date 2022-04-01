import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import hometabstyles from "./hometabstyles";
import Styles from '../../constants/globalstyle'
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGE_URL } from "../../config";

const Photo = props => {
    const [datas, _datas] = React.useState([]);

    const getGalleryPhotos = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const token = await AsyncStorage.getItem('token');
            const result = await axios.get(`http://14.97.177.30:8484/V1/GalleryPhoto/${userId}`, { headers: { "Authorization": `Bearer ${token}` } });
            if (result.status === 200) {
                _datas(result?.data?.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getGalleryPhotos()
    }, [])

    return (
        <View style={hometabstyles.mainarea}>
            <View style={[hometabstyles.mainview,Styles.mt30]}>
                {
                    datas.length > 0 && datas.map((photos, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                Styles={hometabstyles.thumnail}>
                                <View style={hometabstyles.viewcount}>
                                    <View>
                                        <Ionicons name="eye" style={hometabstyles.viewicon} />
                                    </View>
                                    <Text style={hometabstyles.viewtxt}>25K</Text>
                                </View>
                                <Image
                                    source={{ uri: `${IMAGE_URL}${photos.UserPhotos}` }}
                                    style={hometabstyles.thumnailimage}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default Photo;