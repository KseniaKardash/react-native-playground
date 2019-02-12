import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import FloatingActionMenu from '../components/FloatingActionMenu';

class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Text>Home Screen</Text>
          <FloatingActionMenu navigation={this.props.navigation}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 40,
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  }
});

export default Home;
