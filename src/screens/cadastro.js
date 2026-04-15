import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Cadastro({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />

      <Button style={styles.button}
       title="Cadastrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6,
    padding: 10,
    marginBottom: 5,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  button: {
    marginTop: 10,
    maxWidth: 200,
    alignSelf: 'center',
    width: '100%',
  },
});