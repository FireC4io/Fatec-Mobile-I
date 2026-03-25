import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Pessoas from './src/Pessoas/Pessoas';

// You, 2 seconds ago | 1 author (you)
class App5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'Thiago', idade: 33, email: 'thiago@thiago.com' },
        { id: '3', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com' },
        { id: '4', nome: 'Henrique', idade: 50, email: 'henrique@henrique.com' },
        { id: '5', nome: 'Thiago', idade: 33, email: 'thiago@thiago.com' },
        { id: '6', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com' },
        { id: '7', nome: 'JOSE', idade: 33, email: 'thiago@thiago.com' },
        { id: '8', nome: 'HENRIQUE', idade: 20, email: 'lucas@lucas.com' },
      ],
      nome: '',
      idade: '',
      email: '',
    };
    this.handleSalvar = this.handleSalvar.bind(this);
  }

  handleSalvar() {
    const { nome, idade, email, lista } = this.state;
    if (!nome || !idade || !email) return;
    const novoId = (lista.length + 1).toString();
    const novoItem = { id: novoId, nome, idade: parseInt(idade), email };
    this.setState({
      lista: [...lista, novoItem],
      nome: '',
      idade: '',
      email: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={this.state.nome}
              onChangeText={nome => this.setState({ nome })}
            />
            <TextInput
              style={styles.input}
              placeholder="Idade"
              value={this.state.idade}
              keyboardType="numeric"
              onChangeText={idade => this.setState({ idade })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TouchableOpacity style={styles.button} onPress={this.handleSalvar}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
       

        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
export default App5;