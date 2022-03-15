import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import SearchStyle from '../../screens/search/SearchStyle';
import Styles from '../../constants/globalstyle';
import AntDesign from 'react-native-vector-icons/Feather';


function Intrested() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={[Styles.pb50], { paddingHorizontal: 5, marginVertical: 20 }}>
                <View style={SearchStyle.searchmain}>
                    <View style={SearchStyle.imagebox}>
                        <Image source={require('../../assets/images/pic-1.png')}
                            style={SearchStyle.photo}
                        />
                        <Text style={SearchStyle.txt}>Mueksh Thakur</Text>
                    </View>
                    <View style={SearchStyle.imagebox}>
                        <Image source={require('../../assets/images/pic-56.png')}
                            style={SearchStyle.photo}
                        />
                        <Text style={SearchStyle.txt}>Sapna Thakur</Text>
                    </View>
                    <View style={{
                        height: 50, width: 50, borderRadius: 50 / 2, borderWidth: 2, borderColor: '#fff',
                        backgroundColor: '#f44555', justifyContent: 'center',
                        alignItems: 'center', position: 'absolute', top: 50, left: '43%'
                    }}>
                        <AntDesign name="heart" color="#fff" size={25} />
                    </View>
                </View>
                <View style={SearchStyle.searchmain}>
                    <View style={SearchStyle.imagebox}>
                        <Image source={require('../../assets/images/pic-4.png')}
                            style={SearchStyle.photo}
                        />
                        <Text style={SearchStyle.txt}>Mueksh Thakur</Text>
                    </View>
                    <View style={SearchStyle.imagebox}>
                        <Image source={require('../../assets/images/pic-2.png')}
                            style={SearchStyle.photo}
                        />
                        <Text style={SearchStyle.txt}>Sapna Thakur</Text>
                    </View>
                    <View style={{
                        height: 50, width: 50, borderRadius: 50 / 2, borderWidth: 2, borderColor: '#fff',
                        backgroundColor: '#f44555', justifyContent: 'center',
                        alignItems: 'center', position: 'absolute', top: 50, left: '43%'
                    }}>
                        <AntDesign name="heart" color="#fff" size={25} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Intrested