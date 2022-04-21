import React, { useEffect, useState, } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";
import { getOppositeUserByCountry, oppositeUserTypeListing } from "../../service";
import globalstyle from "../../constants/globalstyle";
import { IMAGE_URL } from "../../config";

const CountrySearch = props => {
    const [countryWiseUserList, setCountryWiseUserList] = useState([]);

    useEffect(() => {
        getUserList();
    }, [])

    const getUserList = async () => {
        const user = await AsyncStorage.getItem("user");
        const gender = JSON.parse(user).Gender
        try {
            const response = await getOppositeUserByCountry(gender);
            if (response.status === 200) {
                setCountryWiseUserList(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20} showsVerticalScrollIndicator={false}>
                    {
                        countryWiseUserList && countryWiseUserList.length > 0 ? countryWiseUserList.map((el, idx) => (
                            <View key={idx}>
                                <Text style={Styles.titleabout}>{el?.countryName}</Text>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={SearchStyle.countryScroll}
                                >
                                    {el?.countryData && el?.countryData.length && el?.countryData.map((img, index) =>
                                    (
                                        <View style={SearchStyle.countryphotobox} key={index}>
                                            <Image source={{uri : `${IMAGE_URL}/${img?.Photo}`}}
                                                style={SearchStyle.countyphoto}
                                            />
                                        </View>
                                    ))
                                    }
                                </ScrollView>
                            </View>
                        ))
                            : <View style={globalstyle.noData}>
                                <Text>No data available</Text>
                            </View>
                    }
                </ScrollView>
            </View>
        </View>

    );
};

export default CountrySearch;