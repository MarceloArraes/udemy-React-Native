import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'main',
    },
  },
);

export default createAppContainer(navigator);
