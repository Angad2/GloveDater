// import React from 'react';

// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// //import {createBottomTabNavigator} from 'react-navigation-tabs';

// import RegisterStepOne from '../screens/register/RegisterStepOne';
// import RegisterStepTwo from '../screens/register/RegisterStepTwo';
// import RegisterStepThree from '../screens/register/RegisterStepThree';
// import RegisterStepFour from '../screens/register/RegisterStepFour';
// import RegisterSteFive from '../screens/register/RegisterStepFive';
// import Upload from '../screens/register/Upload';
// import Identitypage from '../screens/register/Identitypage';
// import HomeScreen from '../screens/home/HomeScreen';
// import Photo from '../screens/home/Photo';
// import HomeAbout from '../screens/home/HomeAbout';
// import HomeExperiance from '../screens/home/HomeExperiance';
// import EditProfile from '../screens/home/EditProfile';
// import Login from '../screens/register/Login';
// import SearchGlobal from '../screens/search/SearchGlobal';
// import CountrySearch from '../screens/search/CountrySearch';
// import Matches from '../screens/matches';
// import HomeFeed from '../screens/Feed/HomeFeed';
// import Searches from '../screens/search';
// import Chat from '../screens/Chat';

// const RegisterStack = {
//     Register: {
//         screen: RegisterStepOne,
//         navigationOptions: {
//             headerShown: null,
//         },
//     },

// RegisterTwo: {
//     screen: RegisterStepTwo,
//     navigationOptions: {
//         headerShown: null,
//     },
// },

// RegisterThree: {
//     screen: RegisterStepThree,
//     navigationOptions: {
//         headerShown: null,
//     },
// },

//     RegisterFour: {
//         screen: RegisterStepFour,
//         navigationOptions: {
//             headerShown: null,
//         },
//     },

//     RegisterFive: {
//         screen: RegisterSteFive,
//         navigationOptions: {
//             headerShown: null,
//         },
//     },

//     UploadPage: {
//         screen: Upload,
//         navigationOptions: {
//             headerShown: null,
//         },
//     },

//     Idpage: {
//         screen: Identitypage,
//         navigationOptions: {
//             headerShown: null,
//         },
//     },
// },

// HomeStack = {

//         Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//                 headerShown: null,
//             },
//             screenOptions: {
//                 headerShown: false
//               }
//         },

//         Homephoto: {
//             screen: Photo,
//             navigationOptions: {
//             headerShown: null,
//             },
//         },
//         Homeabout: {
//             screen: HomeAbout,
//             navigationOptions: {
//             headerShown: null,
//             },
//         },
//         Homeexp: {
//             screen: HomeExperiance,
//             navigationOptions: {
//             headerShown: null,
//             },
//         },
//         editProfile: {
//             screen: EditProfile,
//             navigationOptions: {
//             headerShown: null,
//             },
//         },
//     },

// LoginStack = {
//         Login: {
//             screen: Login,
//             navigationOptions: {
//             headerShown: null,
//         },
//     },
// },

// SearchStack = {
//     Global: {
//         screen: SearchGlobal,
//         navigationOptions: {
//         headerShown: null,
//         },
//     },
//     Country: {
//         screen: CountrySearch,
//         navigationOptions: {
//         headerShown: null,
//         },
//     },
//     Search: {
//         screen: Searches,
//         navigationOptions: {
//         headerShown: null,
//         },
//     },
// },

// MatchesStack = {
//     Matches: {
//         screen: Matches,
//         navigationOptions: {
//         headerShown: null,
//         },
//     }
// },
// FeedStack = {
//     Feed: {
//         screen: HomeFeed,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
// },
// ChatStack = {
//     Chat: {
//         screen: Chat,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
// }

// GlobeNavigator = createStackNavigator(
//     {
//     ...RegisterStack,
//     ...HomeStack,
//     ...LoginStack,
//     ...SearchStack,
//     ...MatchesStack,
//     ...FeedStack,
//     ...ChatStack
//     //bottomTab
//     },
//     {
//         initialRouteName: "Login",
//         headerShown: false,
//       }
// );

// export default createAppContainer(GlobeNavigator);


import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RegisterStepOne from '../screens/register/RegisterStepOne';
import RegisterStepTwo from '../screens/register/RegisterStepTwo';
import RegisterStepThree from '../screens/register/RegisterStepThree';
import RegisterStepFour from '../screens/register/RegisterStepFour';
import RegisterSteFive from '../screens/register/RegisterStepFive';
import Upload from '../screens/register/Upload';
import Identitypage from '../screens/register/Identitypage';
import HomeScreen from '../screens/home/HomeScreen';
import HomeAbout from '../screens/home/HomeAbout';
import HomeExperiance from '../screens/home/HomeExperiance';
import EditProfile from '../screens/home/EditProfile';
import Login from '../screens/register/Login';
import Matches from '../screens/matches';
import HomeFeed from '../screens/Feed/HomeFeed';
import Searches from '../screens/search';
import Chat from '../screens/Chat';
import Messages from '../screens/Chat/messages';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const NonAuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterStepOne"
      component={RegisterStepOne}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterTwo"
      component={RegisterStepTwo}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterThree"
      component={RegisterStepThree}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterFour"
      component={RegisterStepFour}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterFive"
      component={RegisterSteFive}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UploadPage"
      component={Upload}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Idpage"
      component={Identitypage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

const HomeStack = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#f44555',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 60,
      },
    }}>
    <BottomTab.Screen
      name="Home"
      component={HomeFeed}
      options={{
        tabBarLabel: ({ focused }) =>
          <Text
            numberOfLines={1}
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 14,
              paddingBottom: 10,
              color: '#fff'
            }}>
            Home
          </Text>,
        tabBarIcon: ({ focused }) =>
          <Ionicons
            name="md-home"
            size={24}
            color="#fff"
            style={{ marginTop: 5 }}
          />
      }}
    />

    <BottomTab.Screen
      name="Chats"
      component={ChatStack}
      options={{
        // tabBarStyle: {display: 'none'},
        tabBarLabel: ({ focused }) =>
        (<Text
          numberOfLines={1}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 14,
            paddingBottom: 10,
            color: '#fff'
          }}>
          Chat
        </Text>),
        tabBarIcon: ({ focused }) =>
          <Ionicons
            name="md-chatbox-ellipses-outline"
            size={24}
            color="#fff"
            style={{ marginTop: 5 }}
          />
      }}
    />
    <BottomTab.Screen
      name="Search"
      component={Searches}
      options={{
        tabBarLabel: ({ focused }) =>
        (<Text
          numberOfLines={1}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 14,
            paddingBottom: 10,
            color: '#fff'
          }}>
          Search
        </Text>),
        tabBarIcon: ({ focused }) =>
          <Ionicons
            name="md-search-outline"
            size={24}
            color="#fff"
            style={{ marginTop: 5 }}
          />
      }}
    />
    <BottomTab.Screen
      name="Filter"
      component={Searches}
      options={{
        tabBarLabel: ({ focused }) =>
        (<Text
          numberOfLines={1}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 14,
            paddingBottom: 10,
            color: '#fff'
          }}>
          Filter
        </Text>),
        tabBarIcon: ({ focused }) =>
          <Ionicons
            name="filter-outline"
            size={24}
            color="#fff"
            style={{ marginTop: 5 }}
          />
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarLabel: ({ focused }) =>
        (<Text
          numberOfLines={1}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 14,
            paddingBottom: 10,
            color: '#fff'
          }}>
          Profile
        </Text>),
        tabBarIcon: ({ focused }) =>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#fff"
            style={{ marginTop: 5 }}
          />
      }}
    />
  </BottomTab.Navigator>
);

const ChatStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "Messages") {
      navigation.setOptions({ tabBarStyle: {display: 'none'} });
    } 
    
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}


const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyProfile"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="About"
      component={HomeAbout}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Experience"
      component={HomeExperiance}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Matches"
      component={Matches}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)


function GlobeNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NonAuthStack">
        {/* <Stack.Screen
            name="splash"
            component={splasScreen}
            options={{ headerShown: false }}
          /> */}
        <Stack.Screen
          name="NonAuthStack"
          component={NonAuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GlobeNavigator;