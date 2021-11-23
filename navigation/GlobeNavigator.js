import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import RegisterStepOne from '../screens/register/RegisterStepOne';
import RegisterStepTwo from '../screens/register/RegisterStepTwo';
import RegisterStepThree from '../screens/register/RegisterStepThree';
import RegisterStepFour from '../screens/register/RegisterStepFour';
import RegisterSteFive from '../screens/register/RegisterStepFive';
import Upload from '../screens/register/Upload';
import Identitypage from '../screens/register/Identitypage';
import HomeScreen from '../screens/home/HomeScreen';
import Homephoto from '../screens/home/Photo';
import Photo from '../screens/home/Photo';
import HomeAbout from '../screens/home/HomeAbout';
import HomeExperiance from '../screens/home/HomeExperiance';
import EditProfile from '../screens/home/EditProfile';


const GlobeNavigator = createStackNavigator (
    {
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

        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: null,
            },
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
    }
);

export default createAppContainer(GlobeNavigator);