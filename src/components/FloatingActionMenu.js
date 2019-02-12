import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-circular-action-menu';
import { PEACHY, WHITE, ELECTRIC } from '../assets/colors';

class FloatingActionMenu extends Component {

  render() {
    return (
      <ActionButton
      buttonColor={ELECTRIC}
      position="right"
      btnOutRange={ELECTRIC}
      itemSize={50}
      size={70}
      style={styles.actionButton}>
        <ActionButton.Item buttonColor={PEACHY} title="New Task" onPress={() => this.props.navigation.navigate('Calendar')}>
          <Icon name="twitter" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={PEACHY} title="Notifications" onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="vine" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={PEACHY} title="All Tasks" onPress={() => this.props.navigation.navigate('Calendar')}>
          <Icon name="calendar" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    width: 20,
    color: WHITE,
  },
});

export default FloatingActionMenu;
