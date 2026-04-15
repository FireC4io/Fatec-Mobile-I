import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Consulta({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Usuário</Text>
      <Button title="Consultar"  />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
});