import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FloatingActionMenu from '../components/FloatingActionMenu';
import { WHITE, DARK_GRAY } from '../assets/colors.js';

class Home extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView testID='home_screen' style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Home Screen</Text>
          <FloatingActionMenu navigation={this.props.navigation}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    color: DARK_GRAY,
  }
});

export default Home;
