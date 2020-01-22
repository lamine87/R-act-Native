import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import { Card, TextInput, Chip, Avatar } from 'react-native-paper';

export default class CreateContact extends React.Component {
  state = {
    nomValue: '',
    prenomValue: '',
    avatarValue: '',
  };

  addCont = () => {
    if (this.state.nomValue == '') {
      Alert.alert('Le nom est obligatoire');
    } else
      this.props.addCont(
        this.state.nomValue,
        this.state.prenomValue,
        this.state.avatarValue
      );

    this.setState({
      nomValue: '',
      prenomValue: '',
      avatarValue: '',
    });
  };

  render() {
    const genre = this.props.avatarList;
    const check = this.state;
    return (
      <Card>
        <Card.Content>
          <View style={styles.saisie}>
            <TextInput
              label="Nom"
              mode="outlined"
              style={styles.input}
              onChangeText={text => this.setState({ nomValue: text })}
              value={this.state.nomValue}
            />
            <TextInput
              label="Prenom"
              mode="outlined"
              style={styles.input}
              onChangeText={text => this.setState({ prenomValue: text })}
              value={this.state.prenomValue}
            />
          </View>
          <View style={styles.chip}>
            <Chip
              icon={() => (
                <Avatar.Image
                  source={genre.homme}
                  size={30}
                  style={{ backgroundColor: '#fafafa' }}
                />
              )}
              onPress={() => this.setState({ avatarValue: 'homme' })}
              selected={check.avatarValue === 'homme' ? true : false}
              selectedColor="red"
              mode="outlined"
              style={{ width: 110 }}
              textStyle={{ fontSize: 10, color: 'black' }}>
              Homme
            </Chip>
            <Chip
              icon={() => (
                <Avatar.Image
                  source={genre.femme}
                  size={30}
                  style={{ backgroundColor: '#fafafa' }}
                />
              )}
              onPress={() => this.setState({ avatarValue: 'femme' })}
              selected={check.avatarValue === 'femme' ? true : false}
              selectedColor="red"
              mode="outlined"
              style={{ width: 110 }}
              textStyle={{ fontSize: 10, color: 'black' }}>
              Femme
            </Chip>
            <Chip
              icon={() => (
                <Avatar.Image
                  source={genre.autre}
                  size={30}
                  style={{ backgroundColor: '#fafafa' }}
                />
              )}
              onPress={() => this.setState({ avatarValue: 'autre' })}
              selected={check.avatarValue === 'autre' ? true : false}
              selectedColor="red"
              mode="outlined"
              style={{ width: 110 }}
              textStyle={{ fontSize: 10, color: 'black' }}>
              Autres
            </Chip>
          </View>
          <Button title="Valider" onPress={this.addCont} />
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  saisie: {
    alignItems: 'center',
  },
  chip: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: 200,
    margin: 4,
    fontSize: 14,
  },
});
