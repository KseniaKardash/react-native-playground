import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CustomCamera from '../components/Camera';

class Camera extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (<View />)
  });

  render() {
    return (
      <SafeAreaView testID='camera_screen' style={styles.container}>
          <CustomCamera />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Camera;
