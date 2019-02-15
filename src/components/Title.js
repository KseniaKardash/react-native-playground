import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Title } from '@shoutem/ui';
import { WHITE } from '../assets/colors';

class CustomTitle extends Component {

  render() {
    return (
      <Title style={styles.title}>
        {this.props.title}
      </Title>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: WHITE,
    fontSize: 22,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center'
  },
});

export default CustomTitle;
