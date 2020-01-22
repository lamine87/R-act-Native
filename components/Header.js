import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';

// or any pure javascript modules available in npm
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Header extends React.Component {
  render() {
    return (
        <Appbar.Header style={styles.base}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Contact" subtitle="Ma liste de contact" />
          <Appbar.Action icon="account-search" onPress={this.props.onClick}  />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    height: 'auto',
    width: 'maxi',
    padding: 5,
  },
});
