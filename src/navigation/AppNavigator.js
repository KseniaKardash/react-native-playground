import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Calendar from "../screens/Calendar";
import Home from "../screens/Home";
import { PEACHY, ELECTRIC, WHITE } from "../assets/colors";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Calendar: { screen: Calendar },
  },
  {
     initialRouteName: 'Home',
     defaultNavigationOptions: {
       headerStyle: {
         backgroundColor: ELECTRIC,
       },
       headerTintColor: WHITE,
       headerTitleStyle: {
         fontWeight: 'bold',
       },
     },
   }
);

export default createAppContainer(AppNavigator);
