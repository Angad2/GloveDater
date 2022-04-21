import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Styles from '../../constants/globalstyle';
import Footer from '../../components/Footer';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HeaderLogd from '../../components/HeaderLogd';
import InboxList from './inboxList';
import SentMsgList from './sentMsgList';
import ArchivedList from './archivedList';
import { StatusBar } from 'expo-status-bar';

// const renderScene = SceneMap({
//     inbox: <InboxList />,
//     sent: sentMsgList,
//     archive: ArchivedList
// });


function Chats(props) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'inbox', title: 'Inbox' },
        { key: 'sent', title: 'Sent' },
        { key: 'archive', title: 'Archive' }
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'inbox':
             return <InboxList {...props}/>;
          case 'sent':
            return <SentMsgList {...props}/>;
            case 'archive':
            return <ArchivedList {...props}/>;
          default:
            return null;
      }    
    }

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#f44555' }}
            style={{ backgroundColor: '#fefefe' }}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: focused ? '#f44555' : '#000', fontSize: 16 }}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <View style={Styles.mainbody}>
             {/* <StatusBar barStyle="default" translucent={true} backgroundColor="#ccc"  /> */}
            <HeaderLogd onSelect={() => { props.navigation.goBack() }} title="Message" />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
            {/* <View style={{ marginTop: 60 }}>
                <Footer navigation={props.navigation} />
            </View> */}
        </View>
    )
}

export default Chats;