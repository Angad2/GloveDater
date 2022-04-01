import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Styles from '../../constants/globalstyle';
import Footer from '../../components/Footer';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchGlobal from './SearchGlobal';
import CountrySearch from './CountrySearch';
import NearBySearch from './nearBySerach';
import HeaderLogd from '../../components/HeaderLogd';

const renderScene = SceneMap({
    global: SearchGlobal,
    country_search: CountrySearch,
    near_by_search: NearBySearch
});

function Searches(props) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'global', title: 'Global' },
        { key: 'country_search', title: 'By Country' },
        { key: 'near_by_search', title: 'Near' }
    ]);

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
            <HeaderLogd onSelect={() => { props.navigation.navigate('Home') }} title="Search" />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
            <View style={{ marginTop: 60 }}>
                <Footer navigation={props.navigation} />
            </View>
        </View>
    )
}

export default Searches;