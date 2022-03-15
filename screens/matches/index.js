import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Styles from '../../constants/globalstyle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Intrested from '../../components/Matches/intrested';
import Favorited_me from '../../components/Matches/favorited_me';
import My_favorites from '../../components/Matches/my_favorites';

const renderScene = SceneMap({
  intrested: Intrested,
  favorited_me: Favorited_me,
  my_favorites: My_favorites
});


function Matches(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'intrested', title: 'Intrested' },
    { key: 'favorited_me', title: 'Favorited me' },
    { key: 'my_favorites', title: 'My favorites' }
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
      <Header onSelect={() => { props.navigation.navigate('Home') }} title="Matches" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <Footer navigation={props.navigation} />
    </View>
  )
}

export default Matches;