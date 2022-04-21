import React, { useEffect, useState, } from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import Styles from '../../constants/globalstyle';
import hometabstyles from "../home/hometabstyles";
import SearchStyle from "./SearchStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { oppositeUserTypeListing } from "../../service";
import { IMAGE_URL } from "../../config";
import globalstyle from "../../constants/globalstyle";


const SearchGlobal = props => {
    const [globalUserList, setGlobalUserList] = useState([]);

    useEffect(() => {
        getUserList();
    }, [])

    const getUserList = async () => {
        const user = await AsyncStorage.getItem("user");
        const gender = JSON.parse(user).Gender
        try {
            const response = await oppositeUserTypeListing(gender);
            if (response.status === 200) {
                setGlobalUserList(response.data.data)
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
                            globalUserList.length > 0 ? globalUserList.map((usr, idx) => (

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

export default SearchGlobal;
