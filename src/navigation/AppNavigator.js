import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Title from '../components/Title';
import Calendar from "../screens/Calendar";
import Profile from "../screens/Profile";
import News from "../screens/News";
import Settings from "../screens/Settings";
import Home from "../screens/Home";
import { PEACHY, ELECTRIC, WHITE } from "../assets/colors";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: () => ({ headerTitle: <Title title='Home'/> }) },
    Calendar: { screen: Calendar, navigationOptions: () => ({ headerTitle: <Title title='Calendar'/> }) },
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
       headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: 20,
       },
     },
   }
);

export default createAppContainer(AppNavigator);
