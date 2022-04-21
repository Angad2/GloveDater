import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import globalstyle from '../../constants/globalstyle';


function SentMsgList() {
  return (
        <View style={globalstyle.noData}>
            <Text>Sent Message</Text>
        </View>
  )
}

export default SentMsgList