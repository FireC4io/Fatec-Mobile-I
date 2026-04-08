import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TextInput,
  Alert,
  Button,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sexo: 0,
      sexos: [
        { key: 1, genero: 'Masculino' },
        { key: 2, genero: 'Feminino' },
      ],
      status: false,
      valor: 0,
    };

    this.createTwoButtonAlert = this.createTwoButtonAlert.bind(this);
  }

  
  createTwoButtonAlert() {
  const { nome, valor, sexo, sexos, status } = this.state;

  const sexoSelecionado = sexos[sexo]?.genero || '';
  const estadoCivil = status ? 'Casado' : 'Solteiro';

  const mensagem = `Nome: ${nome}\nLimite: R$ ${valor.toFixed(2)}\nSexo: ${sexoSelecionado}\nEstado Civil: ${estadoCivil}`;

  if (Platform.OS === 'web') {
    window.alert(`Conta Criada com Sucesso\n\n${mensagem}`);
  } else {
    Alert.alert('Conta Criada com Sucesso', mensagem, [
      { text: 'OK' }
    ]);
  }
}

  render() {
    let sexoGenero = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.genero} />;
    });

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
        />
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={sexoTipo => this.setState({ sexo: sexoTipo })}
        >
          {sexoGenero}
        </Picker>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={valorSelecionado =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />

        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          Escolha seu Limite {this.state.valor.toFixed(1)} R$
        </Text>

        <Switch
          value={this.state.status}
          onValueChange={valorSwitch => this.setState({ status: valorSwitch })}
          thumbColor="#FF0000"
        />

        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          {this.state.status ? 'Casado' : 'Solteiro'}
        </Text>

        <Button
          title="Criar Conta"
          onPress={this.createTwoButtonAlert}
          color="#007bff"
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
});
