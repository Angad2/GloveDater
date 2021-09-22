import React from "react";
import {View, Text, Image} from 'react-native';

import rstyles from "../screens/rstyles";
import istyles from "../screens/register/istyles";

const IdentityUper = pros => {
    return(
        <View style={rstyles.formview4, {paddingBottom: 0,}}>
            <Text style={istyles.bigtxt}>Please take and upload a photo of
                yourself, where you place your right
                hand on your chest.</Text>
            <View style={istyles.girl}>
                <Image source={require('../assets/images/girl.png')} style={istyles.girlimg} />
            </View>
            <View>
            </View>
        </View>
    );
};

export default IdentityUper;