import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExampleScreen from './screens/ExampleScreen';
import HomeNavigation from './screens/HomeNavigation';
import FoodSchedule from './screens/FoodSchedule';
import Booking from './screens/Booking';

const MainNavigator = createStackNavigator({
  HomeNavigation: { screen: HomeNavigation },
  Example: { screen: ExampleScreen },
  FoodSchedule: { screen: FoodSchedule },
  ConferenceBooking: { screen: Booking }

});

const App = createAppContainer(MainNavigator);

export default App;