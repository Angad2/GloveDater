import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobeNavigator from './navigation/GlobeNavigator';


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'quicksand': require('./assets/fonts/Quicksand-Regular.otf'),
    'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'quicksand-semi-bold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'quicksand-light': require('./assets/fonts/Quicksand-Light.ttf'),
    'quicksand-medium': require('./assets/fonts/Quicksand-Medium.ttf'),
  });
};


export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
      <GlobeNavigator/>
  );
}

