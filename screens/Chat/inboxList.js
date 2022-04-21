import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';
import globalstyle from '../../constants/globalstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'
import Loader from '../../components/Loader';


function InboxList(props) {
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true)

    const getToken = async () => {
        const user = await AsyncStorage.getItem('user');
        const userId = JSON.parse(user).Id
        setUserId(userId)
        chatList(userId);
    }

    useEffect(() => {
        getToken();
    }, [])

    const chatList = async (id) => {
        const result = await axios.get(`http://14.97.177.30:8484/v1/chat/getChatList?userId=${id}`);
        setUserList(result.data.data)
        setLoading(false)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {loading && <Loader />}
            <View
                activeOpacity={0.8} style={styles.feedArea}
            >
                {userList && userList.length > 0 ? userList.map((user, idx) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Messages', { 
                            userId: userId === user?.senderId._id ? user?.receiverId?._id : user?.senderId?._id,
                            chatRoomId: user._id 
                        })}
                        style={styles.feedcard} key={idx}
                    >
                        <View>
                            <Image source={require('../../assets/images/big-pro.jpg')}
                                style={{ width: 100, height: '100%', resizeMode: "cover", borderRadius: 8 }} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 7, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{
                                        width: '60%',
                                        fontFamily: 'quicksand-bold',
                                        fontSize: 16,
                                        color: '#800080',
                                    }}>{userId === user?.senderId._id ? user?.receiverId?.User_name : user?.senderId?.User_name}</Text>
                                    <Text style={{
                                        height: 20,
                                        fontFamily: 'quicksand-bold',
                                        fontSize: 12,
                                        color: '#fff',
                                        backgroundColor: 'red',
                                        borderRadius: 15,
                                        paddingHorizontal: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>New</Text>
                                </View>
                                <Text style={{
                                    fontFamily: 'quicksand-bold',
                                    color: '#800080'
                                }}>{moment(user.updatedDate).format('m')} min </Text>

                            </View>
                            <View style={{ marginTop: 5, paddingHorizontal: 7 }}>
                                <Text><Text style={{ fontWeight: 'bold' }}>Age : </Text>{userId === user?.senderId._id ? user?.receiverId?.Age : user?.senderId?.Age}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Location : </Text>
                                {userId === user?.senderId._id ? user?.receiverId?.City : user?.senderId?.City}{", "}
                                {userId === user?.senderId._id ? user?.receiverId?.Country : user?.senderId?.Country}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )) : <View style={globalstyle.noData}>
                    <Text>No data available</Text>
                </View>}
            </View>
        </ScrollView>
    )
}

export default InboxList