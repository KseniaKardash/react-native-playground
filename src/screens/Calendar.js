import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { WHITE } from '../assets/colors';
import CustomCalendar from '../components/Calendar';
import FloatingActionMenu from '../components/FloatingActionMenu';

class Calendar extends Component {

  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 20, backgroundColor: {WHITE}, alignContent: 'flex-end'}}>
        <Calendar />
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
