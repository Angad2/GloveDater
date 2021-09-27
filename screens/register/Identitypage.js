import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IdentityUper from '../../components/IdentityUper';
import IdentityLower from '../../components/IdentityLower';

import Styles from '../../constants/globalstyle';

const Identitypage = props => {
    return (
        <View style={Styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'UploadPage'});}} title="Identity verification" />
            <ScrollView style={{marginBottom: 70,}}>
                <View>
                <IdentityUper />
            <IdentityLower
            onSelect = {() =>{ props.navigation.navigate({routeName: 'Home'});}}
             />
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

export default Identitypage;