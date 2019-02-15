import React from 'react';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Title from '../components/Title';
import Calendar from '../screens/Calendar';
import Camera from '../screens/Camera';
import Home from '../screens/Home';
import { PEACHY, ELECTRIC, WHITE } from '../assets/colors';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: () => ({ headerTitle: <Title title='Home'/> }) },
    Calendar: { screen: Calendar, navigationOptions: () => ({ headerTitle: <Title title='Calendar'/> }) },
    Camera: { screen: Camera, navigationOptions: () => ({ headerTitle: <Title title='Camera'/> }) },
  },
  {
     initialRouteName: 'Home',
     defaultNavigationOptions: {
       headerBackTitle: null,
       headerStyle: {
         backgroundColor: ELECTRIC,
       },
       headerTintColor: WHITE,
       headerLeftContainerStyle: {
         paddingLeft: 10,
       },
     },
   }
);

export default createAppContainer(AppNavigator);
