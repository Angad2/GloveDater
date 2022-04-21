import React from 'react'
import { ImageBackground, View,Text } from 'react-native'

function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={require('../assets/splash.png')} style={{width: '100%', height: '100%'}}>
            <View>
                <Text>okok</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default SplashScreen