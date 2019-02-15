import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { WHITE } from '../assets/colors';
import CustomCalendar from '../components/Calendar';
import FloatingActionMenu from '../components/FloatingActionMenu';

class Calendar extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (<View />)
  });

  render() {
    return (
      <SafeAreaView testID='calendar_screen' style={styles.container}>
        <View>
        <CustomCalendar />
        <FloatingActionMenu navigation={this.props.navigation} />
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
});

export default Calendar;
