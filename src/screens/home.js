import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      <View style={styles.botao}>
        <Button
          title="Ir para Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Ir para Consulta"
          onPress={() => navigation.navigate('Consulta')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  botao: {
    marginBottom: 10,
    gap: 10,

  },
});