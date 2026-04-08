import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10 
        }}>
      <Text>Bem-vindo à Tela Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details', { itemId: 42 })}
      />
      <Button
        title="Ir para App2"
        onPress={() => navigation.navigate('App2')}
      />
      <Button
        title="Ir para App3"
        onPress={() => navigation.navigate('App3')}
      />
      <Button
        title="Ir para App4"
        onPress={() => navigation.navigate('App4')}
      />
      <Button
        title="Ir para App5"
        onPress={() => navigation.navigate('App5')}
      />
      <Button
        title="Ir para App6"
        onPress={() => navigation.navigate('App6')}
      />
      <Button
        title="Ir para App7"
        onPress={() => navigation.navigate('App7')}
      />
      <Button
        title="Ir para App8"
        onPress={() => navigation.navigate('App8')}
      />
      <Button
        title="Ir para App9"
        onPress={() => navigation.navigate('App9')}
      />
      <Button
        title="Ir para App10"
        onPress={() => navigation.navigate('App10')}
      />

    </View>
  );
}