import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-circular-action-menu';
import { PEACHY, WHITE, ELECTRIC } from '../assets/colors';

class FloatingActionMenu extends Component {

  render() {
    return (
      <ActionButton
      testID='main_action_button'
      buttonColor={ELECTRIC}
      position='right'
      btnOutRange={ELECTRIC}
      itemSize={50}
      size={70}>
        <ActionButton.Item
        testID='action_camera_button'
        buttonColor={PEACHY}
        title='Camera'
        onPress={() => this.props.navigation.navigate('Camera')}>
          <Icon
          name='camera'
          size={23}
          color={WHITE} />
        </ActionButton.Item>
        <ActionButton.Item
        testID='action_home_button'
        buttonColor={PEACHY}
        title='Home'
        onPress={() => this.props.navigation.navigate('Home')}>
          <Icon
          name='home'
          size={26}
          color={WHITE} />
        </ActionButton.Item>
        <ActionButton.Item
        testID='action_calendar_button'
        buttonColor={PEACHY}
        title='Calendar'
        onPress={() => this.props.navigation.navigate('Calendar')}>
          <Icon
          name='calendar'
          size={23}
          color={WHITE}/>
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

export default FloatingActionMenu;
