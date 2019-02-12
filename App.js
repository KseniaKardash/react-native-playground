import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
