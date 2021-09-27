import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const HeightDropdown = props => {
    const [selectedValue, setSelectedValue] = useState("Age");
    return (
        <View style={styles.dropdown} >
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="160" value="160" />
                <Picker.Item label="170" value="170" />
                <Picker.Item label="175" value="175" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
    height: 50,
    padding: 12,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 100,
    borderColor: '#800080',
    borderWidth: 1,
    alignContent: 'center',
    color: 'black',
    marginTop: 15,
    },
});

export default HeightDropdown;