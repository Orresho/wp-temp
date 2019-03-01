import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExampleScreen from './screens/ExampleScreen';
import HomeNavigation from './screens/HomeNavigation';

const MainNavigator = createStackNavigator({
  HomeNavigation: { screen: HomeNavigation },
  Example: { screen: ExampleScreen },
});

const App = createAppContainer(MainNavigator);

export default App;