import React, { useEffect, useRef, useState } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import globalstyle from '../../constants/globalstyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import socketIOClient from "socket.io-client";
import styles from './styles'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader'
const { height, width } = Dimensions.get("window")

const Messages = (props) => {
  const scrollViewRef = useRef();
  const socket = socketIOClient('http://14.97.177.30:8484');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [receiverId, setReceiverId] = useState(props.route.params.userId);
  const [chatRoomId, setChatRoomId] = useState(props.route.params.chatRoomId);
  const [userId, setUserId] = useState('');

  const getToken = async () => {
    const user = await AsyncStorage.getItem("user");
    const userId = JSON.parse(user).Id;
    setUserId(userId)
  }

  const getMessageList = async () => {
    const user = await AsyncStorage.getItem("user");
    const userId = JSON.parse(user).Id
    console.log('userId', userId, chatRoomId)
    await axios.get(`http://14.97.177.30:8484/v1/chat/getMessages?chatRoomId=${chatRoomId}`).then((res => {
      setMessagesList(res.data.data)
      setLoading(false)
    }));
  }

  const sendMessage = async () => {
    const user = await AsyncStorage.getItem("user");
    const userId = JSON.parse(user).Id
    const msg = {
      message: message,
      senderId: userId,
      receiverId: receiverId,
    }
    socket.emit('SEND MESSAGE', msg)
    axios.post('http://14.97.177.30:8484/v1/chat/createMessage', msg).then(res => {
      console.log('res==>', res.data)
    })
    setMessage('');
  }

  useEffect(() => {
    socket.on('RECEIVE MESSAGE', (msg) => {
      setMessagesList([...messagesList, msg])
    })
    getToken();
    getMessageList();
  }, [message])


  return (
    <View style={[globalstyle.mainbody]}>
      {loading && <Loader />}
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={globalstyle.hedermain}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={props.onSelect}
              style={globalstyle.arrow}>
              <AntDesign name="left" color="#f44555" size={25} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/big-pro.jpg')}
                style={globalstyle.profilepic}>
              </Image>
              <Text style={[globalstyle.title, { marginLeft: 10 }]}>Angad KUmar</Text>
            </View>
          </View>
          <TouchableOpacity onPress={props.navToProfile}>
            <Entypo name="dots-three-vertical" color="#f44555" size={25} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} >
          <View style={{ flex: 1, paddingBottom: 10, marginHorizontal: 10,marginTop: 10 }}>
            {
              messagesList && messagesList.length > 0 ? messagesList.map((msg, idx) => (
                <View key={idx}>
                  {userId === msg?.senderId._id && <TouchableOpacity activeOpacity={0.8} key={idx}
                    style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <View
                      style={styles.senderMsg}>
                      <Text style={{ color: '#000', fontSize: 14, fontFamily: 'quicksand-medium', }}>{msg?.message}</Text>
                      <Text style={{ color: '#888', fontSize: 12, textAlign: 'right' }}>10 Am</Text>
                    </View>
                  </TouchableOpacity>}
                  {userId !== msg?.senderId._id && <TouchableOpacity activeOpacity={0.8}
                    style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-start' }}>
                    <View
                      style={styles.receiverMsg}>
                      <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'quicksand-medium', }}>{msg?.message}</Text>
                      <Text style={{ color: '#ccc', fontSize: 12, textAlign: 'left' }}>10 Am</Text>
                    </View>
                  </TouchableOpacity>}
                </View>

              )) : <View style={globalstyle.noData}>
                <Text>No data available</Text>
              </View>
            }

          </View>
        </ScrollView>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 15,
          paddingTop: 5,
          backgroundColor: '#fff',
          marginHorizontal: 10
        }}
        >
          <View style={{
            width: '85%', backgroundColor: '#e0e0e0', height: 50, borderRadius: 50,
            alignSelf: 'center', paddingHorizontal: 10, justifyContent: 'center'
          }}>
            <TextInput placeholder="Your message . . . ."
              value={message}
              multiline={true}
              onChangeText={(text) => setMessage(text)} />
          </View>
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: '#e0e0e0', width: 50, borderRadius: 25,
              justifyContent: 'center', alignItems: 'center', minHeight: 50
            }}>
            <MaterialIcons name="send" size={30} style={{ marginLeft: 5 }} color="#800080" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Messages