// import React,{useEffect, useState} from 'react';
// import { Image, ScrollView, Text, View } from 'react-native';
// import SearchStyle from '../../screens/search/SearchStyle';
// import Styles from '../../constants/globalstyle';
// import AntDesign from 'react-native-vector-icons/Feather';
// import axios from 'axios';


// function Intrested(props) {
//     const [intrestedList, setIntrestedList] = useState([])

//     useEffect(()=>{
//         getData();
//     },[])

//     const getData = async () =>{
//         const response = await axios.get('http://14.97.177.30:8484/V1/favouriteController?userId=6242a3e293cd7f4d10c88253');
//         setIntrestedList(response?.data?.interestedDataList);
//         console.log('response',response.data)
//     }

//     return (
//         <View style={{ flex: 1, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center' }}>
//             <ScrollView style={[Styles.pb50], { paddingHorizontal: 5, marginVertical: 20 }}>
//                 <View style={SearchStyle.searchmain}>
//                     <View style={SearchStyle.imagebox}>
//                         <Image source={require('../../assets/images/pic-1.png')}
//                             style={SearchStyle.photo}
//                         />
//                         <Text style={SearchStyle.txt}>Mueksh Thakur</Text>
//                     </View>
//                     <View style={SearchStyle.imagebox}>
//                         <Image source={require('../../assets/images/pic-56.png')}
//                             style={SearchStyle.photo}
//                         />
//                         <Text style={SearchStyle.txt}>Sapna Thakur</Text>
//                     </View>
//                     <View style={{
//                         height: 50, width: 50, borderRadius: 50 / 2, borderWidth: 2, borderColor: '#fff',
//                         backgroundColor: '#f44555', justifyContent: 'center',
//                         alignItems: 'center', position: 'absolute', top: 50, left: '43%'
//                     }}>
//                         <AntDesign name="heart" color="#fff" size={25} />
//                     </View>
//                 </View>
//                 <View style={SearchStyle.searchmain}>
//                     <View style={SearchStyle.imagebox}>
//                         <Image source={require('../../assets/images/pic-4.png')}
//                             style={SearchStyle.photo}
//                         />
//                         <Text style={SearchStyle.txt}>Mueksh Thakur</Text>
//                     </View>
//                     <View style={SearchStyle.imagebox}>
//                         <Image source={require('../../assets/images/pic-2.png')}
//                             style={SearchStyle.photo}
//                         />
//                         <Text style={SearchStyle.txt}>Sapna Thakur</Text>
//                     </View>
//                     <View style={{
//                         height: 50, width: 50, borderRadius: 50 / 2, borderWidth: 2, borderColor: '#fff',
//                         backgroundColor: '#f44555', justifyContent: 'center',
//                         alignItems: 'center', position: 'absolute', top: 50, left: '43%'
//                     }}>
//                         <AntDesign name="heart" color="#fff" size={25} />
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// export default Intrested

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from '../../constants/globalstyle';
import hometabstyles from "../../screens/home/hometabstyles";
import SearchStyle from "./matchStyle";
import { IMAGE_URL } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favouriteController } from '../../service';

function Intrested() {
    const [intrestedList, setIntrestedList] = useState([])
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const user = await AsyncStorage.getItem("user");
            const userId =  JSON.parse(user).Id
            const response = await favouriteController(userId)
            setIntrestedList(response?.data?.data?.interestedDataList);
        } catch (error) {
            console.log('err',error)
        }
    }

    return (
        <View style={Styles.mainbody}>
            <View style={hometabstyles.mainarea}>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                    <View style={SearchStyle.searchmain}>
                        {
                            intrestedList && intrestedList.length > 0 ? intrestedList.map((intrested, idx) => (
                                <View style={SearchStyle.imagebox} key={idx}>
                                    <Image source={{ uri: `${IMAGE_URL}/${intrested?.Photo}` }}
                                        style={SearchStyle.photo}
                                    />
                                    <Text style={SearchStyle.txt}>{intrested?.User_name}</Text>
                                </View>
                            )) :
                                <View style={{ flex: 1, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>No data available</Text>
                                </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Intrested