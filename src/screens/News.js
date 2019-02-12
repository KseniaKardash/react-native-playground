import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { WHITE, DARK_GRAY } from '../assets/colors.js';

class News extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>News Screen</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    color: DARK_GRAY,
  }
});

export default News;