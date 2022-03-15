import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

import RegisterStepOne from '../screens/register/RegisterStepOne';
import RegisterStepTwo from '../screens/register/RegisterStepTwo';
import RegisterStepThree from '../screens/register/RegisterStepThree';
import RegisterStepFour from '../screens/register/RegisterStepFour';
import RegisterSteFive from '../screens/register/RegisterStepFive';
import Upload from '../screens/register/Upload';
import Identitypage from '../screens/register/Identitypage';
import HomeScreen from '../screens/home/HomeScreen';
import Photo from '../screens/home/Photo';
import HomeAbout from '../screens/home/HomeAbout';
import HomeExperiance from '../screens/home/HomeExperiance';
import EditProfile from '../screens/home/EditProfile';
import Login from '../screens/register/Login';
import SearchGlobal from '../screens/search/SearchGlobal';
import CountrySearch from '../screens/search/CountrySearch';
import Matches from '../screens/matches';


const RegisterStack = {
    Register: {
        screen: RegisterStepOne,
        navigationOptions: {
            headerShown: null,
        },
    },

    RegisterTwo: {
        screen: RegisterStepTwo,
        navigationOptions: {
            headerShown: null,
        },
    },

    RegisterThree: {
        screen: RegisterStepThree,
        navigationOptions: {
            headerShown: null,
        },
    },

    RegisterFour: {
        screen: RegisterStepFour,
        navigationOptions: {
            headerShown: null,
        },
    },

    RegisterFive: {
        screen: RegisterSteFive,
        navigationOptions: {
            headerShown: null,
        },
    },

    UploadPage: {
        screen: Upload,
        navigationOptions: {
            headerShown: null,
        },
    },

    Idpage: {
        screen: Identitypage,
        navigationOptions: {
            headerShown: null,
        },
    },
},

HomeStack = {
        
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: null,
            },
            screenOptions: {
                headerShown: false
              }
        },
        
        Homephoto: {
            screen: Photo,
            navigationOptions: {
            headerShown: null,
            },
        },
        Homeabout: {
            screen: HomeAbout,
            navigationOptions: {
            headerShown: null,
            },
        },
        Homeexp: {
            screen: HomeExperiance,
            navigationOptions: {
            headerShown: null,
            },
        },
        editProfile: {
            screen: EditProfile,
            navigationOptions: {
            headerShown: null,
            },
        },
    },

LoginStack = {
        Login: {
            screen: Login,
            navigationOptions: {
            headerShown: null,
        },
    },
},

SearchStack = {
    Global: {
        screen: SearchGlobal,
        navigationOptions: {
        headerShown: null,
        },
    },
    Country: {
        screen: CountrySearch,
        navigationOptions: {
        headerShown: null,
        },
    },
},

MatchesStack = {
    Matches: {
        screen: Matches,
        navigationOptions: {
        headerShown: null,
        },
    }
},

GlobeNavigator = createStackNavigator(
    {
    ...RegisterStack,
    ...HomeStack,
    ...LoginStack,
    ...SearchStack,
    ...MatchesStack
    },
    {
        initialRouteName: "Login",
        header: null,
      }
);

export default createAppContainer(GlobeNavigator);