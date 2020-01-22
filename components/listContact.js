import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Card, IconButton, Avatar, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Item({ nom, prenom, id, avatar }) {
  this.onClickMenu = () => {
    Alert.alert('ici le menu de ', nom);
    console.log('ici le menu de ', nom);
  };
  this.onClickList=()=>{
    console.log('ca marche', nom)
    Alert.alert('ca marche', nom )
  }

  return (
    <TouchableOpacity onPress={this.onClickList}>
      <View style={styles.item}>
        <Card.Title
          title={nom}
          subtitle={prenom}
          left={props => (
            <Avatar.Image
              size={40}
              source={avatar}
              style={{ backgroundColor: '#fafafa' }}
            />
          )}
          right={props => (
            <IconButton
              icon={require('../assets/more-menu.png')}
              size={30}
              style={{ Colors: 'red' }}
              onPress={this.onClickMenu}
            />
          )}
        />
      </View>
    </TouchableOpacity>
  );
}

export default class ListContact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.List}
          renderItem={({ item }) => (
            <View>
              <Item
                nom={item.nom}
                prenom={item.prenom}
                id={item.id}
                avatar={item.avatar}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5
  },
  item: {
    backgroundColor: '#c4c5c4',
    marginVertical: 2,
    borderRadius:15
  },
});
