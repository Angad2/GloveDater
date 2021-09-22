import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import RegisterStepOne from './screens/register/RegisterStepOne';
//import RegisterStepTwo from './screens/register/RegisterStepTwo';
//import RegisterStepThree from './screens/register/RegisterStepThree';
//import RegisterStepFour from './screens/register/RegisterStepFour';
//import RegisterStepFive from './screens/register/RegisterStepFive';
//import Upload from './screens/register/Upload';
//import Identitypage from './screens/register/Identitypage';
//import Home from './screens/home/Home';
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
      <GlobeNavigator />
  );
}

