import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const AgeDropdown = props => {
    const [selectedValue, setSelectedValue] = useState("Age");
    return (
        <View style={styles.dropdown} >
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
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
    pickerbox: {
        width: 150,
        height: 'auto',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute'
    },
});

export default AgeDropdown;