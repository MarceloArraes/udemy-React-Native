
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './scr/screens/SearchScreen';
import ResultsShowScreen from './scr/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
  }
});

export default createAppContainer(navigator);






/* 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */