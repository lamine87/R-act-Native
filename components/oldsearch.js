import * as React from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Search extends React.Component {
  render() {
    return (
      <Button
        icon={() => (
          <Image
            source={require('../assets/search.png')}
            style={{ width: 35, height: 35, tintColor: 'blue' }}
          />
        )}
        mode="text"
        onPress={this.props.onClick}
        uppercase={false}>
        Search
      </Button>
    );
  }
}
