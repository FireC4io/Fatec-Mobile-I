import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import App2 from './App2'
import App3 from './App3'
import App6 from './App6'
import App7 from './App7'
import App8 from './App8'
import App9 from './App9'
import App10 from './App10'


// Criando o Stack Navigator
const Stack = createStackNavigator();

export default function App11() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Definindo a tela "Home" */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Definindo a tela "Details" */}
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App3" component={App3} />
        <Stack.Screen name="App6" component={App6} />
        <Stack.Screen name="App7" component={App7} />
        <Stack.Screen name="App8" component={App8} />
        <Stack.Screen name="App9" component={App9} />
        <Stack.Screen name="App10" component={App10} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}