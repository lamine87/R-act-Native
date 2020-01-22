import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import ListContact from './listContact';

export default class Searchinput extends React.Component {
  state = {
    firstQuery: '',
  };

  onEditeSearch = text => {
    this.props.toto(text);
  };

  onValideSearch = () => {
    console.log('ggg');
    // this.props.toto(this.state.firstQuery)
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={text => {
            this.onEditeSearch(text);
          }}
          value={this.text}
          icon="account-search-outline"
        />
        <ListContact List={this.props.List} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 2,
  },
});
