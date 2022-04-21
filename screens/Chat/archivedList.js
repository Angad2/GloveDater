import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import globalstyle from '../../constants/globalstyle';


function ArchivedList() {
  return (
        <View style={globalstyle.noData}>
            <Text>Archive Message</Text>
        </View>
  )
}

export default ArchivedList