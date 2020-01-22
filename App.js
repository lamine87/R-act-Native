import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import CreateContact from './components/CreateContact';
import ListContact from './components/listContact';
import Header from './components/Header';
import SearchInput from './components/searchInput';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from 'react-navigation'
import InitStat from './app.state';

function majFirstChar(a) {
  return (a + '').charAt(0).toUpperCase() + a.substr(1).toLowerCase();
}

export default class App extends React.Component {
  state = {
    ...InitStat,
    newCont: false,
    searchCont: false,
    searchList: [],
  };

  onClickList = id => {
    Alert.alert('mon id est : ', id);
    console.log('mon id est :', id);
  };

  onClick = () => {
    this.setState({ searchCont: !this.state.searchCont });
    this.setState({ searchList: this.state.contactList });
  };

  toto = searchText => {
    if (searchText == '') {
      return;
    } else {
      let altSearchList = this.state.searchList
      altSearchList = this.state.searchList.filter(Obj => {
        return Obj.nom.toLowerCase().includes(searchText.toLowerCase());
      });
      this.setState({ searchList: altSearchList });
    }
  };

  searchContact = () => {
    if (this.state.searchCont)
      return <SearchInput toto={this.toto} List={this.state.searchList} />;
  };

  addContact = () => {
    if (this.state.newCont) {
      return (
        <CreateContact
          addCont={this.newContact}
          avatarList={this.state.avatarList}
        />
      );
    }
  };

  newContact = (nom, prenom, avatar) => {
    let idmax = 0;
    this.state.contactList.map(Obj => {
      Obj.id >> idmax ? (idmax = Obj.id) : null;
    });

    const listavatar = this.state.avatarList;
    let genre;
    avatar == 'autre'
      ? (genre = listavatar.autre)
      : avatar == 'homme'
      ? (genre = listavatar.homme)
      : avatar == 'femme'
      ? (genre = listavatar.femme)
      : (genre = listavatar.defaut);

    const contactAdd = {
      id: idmax + 1,
      nom: majFirstChar(nom),
      prenom: prenom.toLowerCase(),
      avatar: genre,
    };
    const contactList = [...this.state.contactList, contactAdd];
    this.setState({ contactList, newCont: !this.state.newCont });
  };

  render() {
    const triContact = this.state.contactList.sort((a, b) =>
      a.nom > b.nom ? 1 : b.nom > a.nom ? -1 : 0
    );

    return (
      <View style={styles.container}>
        <Header onClick={this.onClick} />
        {this.searchContact()}
        <Card.Content style={styles.list}>
          <ListContact List={triContact} onClickList={this.onClickList} />
        </Card.Content>
        <Button
          title="Ajouter un contact"
          onPress={() => {
            this.setState({ newCont: !this.state.newCont });
          }}
        />
        {this.addContact()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  list: {
    height: 'auto',
  },
});
