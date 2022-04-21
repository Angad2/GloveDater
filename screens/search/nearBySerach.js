import React, { useEffect, useState, } from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { oppositeUserTypeListingNearBy } from "../../service";
import { IMAGE_URL } from "../../config";
import globalstyle from "../../constants/globalstyle";
import * as Location from 'expo-location';

const NearBySearch = props => {
    const [nearByUserList, setNearByUserList] = useState([]);
    const [locationType, setLocation] = useState(null);

    useEffect(() => {
        getLocation();
        getUserList();
    }, [props])

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location?.coords);
    }

    const getUserList = async () => {
        const user = await AsyncStorage.getItem("user");
        const gender = JSON.parse(user).Gender
        try {
            if (locationType) {
                const variable = {
                    gender: gender,
                    latitude: locationType?.latitude,
                    longitude: locationType?.longitude,
                }
                console.log('variable',variable);
                const response = await oppositeUserTypeListingNearBy(variable);
                if (response.status === 200) {
                    setNearByUserList(response.data.data)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20} showsVerticalScrollIndicator={false}>
                    <View style={SearchStyle.searchmain}>
                        {
                            nearByUserList.length > 0 ? nearByUserList.map((usr, idx) => (

                                <View style={SearchStyle.imagebox} key={idx}>
                                    <Image source={{ uri: `${IMAGE_URL}/${usr.Photo}` }}
                                        style={SearchStyle.photo}
                                    />
                                    <Text style={SearchStyle.txt}>{usr?.User_name}</Text>
                                </View>
                            ))
                                :
                                <View style={globalstyle.noData}>
                                    <Text>No data available</Text>
                                </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>

    );
};

export default NearBySearch;