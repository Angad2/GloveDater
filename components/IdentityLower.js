import React, { useState, useEffect, Component } from "react";
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    Image,
    Button,
    StyleSheet,
    Alert,
    Dimensions

} from "react-native";

import { Camera } from "expo-camera";
import CameraModule from "./CameraModule";

import Colors from '../constants/color'

import { FontAwesome, Ionicons, MaterGlobeNavigatorialCommunityIcons } from '@expo/vector-icons';

const IdentityLower = props => {
    
    const [image, setImage] = useState(null);
    const [camera, setShowCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null); useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []); if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
   
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imagearae}  onPress={() => {
                    setShowCamera(true);
                }}>
                <FontAwesome name="upload" size={50} color={Colors.primary} />
                <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover', top: 0, }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelect} 
            style={styles.uploadbtn}
            >
                <Text style={styles.btntxt}>Upload</Text>              
            
            </TouchableOpacity>

            {camera && (
                <CameraModule
                    showModal={camera}
                    setModalVisible={() => setShowCamera(false)}
                    setImage={(result) => setImage(result.uri)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      paddingTop: 0,
    //   borderColor: 'red',
    //   borderWidth: 1,

    },

    imagearae: {
        backgroundColor: '#FFEDEF',
        width: '100%',
        height: Dimensions.get("window").height / 4,
        justifyContent: 'flex-start',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        alignItems: 'center',
        alignContent: 'center',
    },

    uploadbtn: {
        width: "50%",
        height: 56,
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#7046E6',
        marginTop: 36,
        alignContent: 'center',
        alignItems: 'center',
    },

    btntxt:{
        fontSize: 18,
        color: 'white',
    }
  });

export default IdentityLower;
