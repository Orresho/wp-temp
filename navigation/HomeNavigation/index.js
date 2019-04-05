import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExampleScreen from './screens/ExampleScreen';
import FoodSchedule from './screens/FoodSchedule';
import Booking from './screens/Booking';

const MainNavigator = createStackNavigator({
  Example: { screen: ExampleScreen },
  FoodSchedule: { screen: FoodSchedule },
  ConferenceBooking: { screen: Booking }
});

export default createMainNavigation = createAppContainer(MainNavigator);
