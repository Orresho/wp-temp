import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/AuthenticateScreen';
import HomeNavigation from '../screens/HomeNavigation';
import ExampleScreen from '../screens/ExampleScreen';
import BookingScreen from '../screens/Booking';
import FoodScheduleScreen from '../screens/FoodSchedule';

/**
 * We use this navigation as our root navigator. There should be no other navigator created throughout the app. 
 */
const RootNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
    HomeNavigation: { screen: HomeNavigation, navigationOptions: { header: null } },
    Example: { screen: ExampleScreen },
    ConferenceBooking: { screen: BookingScreen },
    FoodSchedule: { screen: FoodScheduleScreen }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

/**
 * Wrapper component used to wrap the entire application giving us all the navigation props needed throughout the code base
 */
export const RootNavigatorStack = createAppContainer(RootNavigator);
