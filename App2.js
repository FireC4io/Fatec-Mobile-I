import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default class App2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome:'',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(input){
    if
    (input === ''){
      alert('Digite seu nome para entrar!');
    return;
  }

  this.setState({nome: 'Bem vindo: ' + this.state.input});
  }
  render(){
    return (
      <View style={styles.container}>
          <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome..."
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({input: text})}  
          />

          <Button title="Entrar" onPress={this.entrar} />

          <Text style={styles.text}>{this.state.nome}</Text>
        </View>
    );
  }
};


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    alignItems: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 5,
    margin: 20,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#1077d7',
    color: '#fff',
  },

  text: {
    fontSize: 35,
    textAlign: 'center',
  },

  textButton: {
    fontSize: 20,
    color: '#fff',
  }

});
