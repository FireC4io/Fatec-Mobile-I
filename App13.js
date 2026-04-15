import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App13() {
  const  Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Header App</Text>
      </View>
    );
  }
  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>
           <Text>Box 1</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 2</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 3</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 4</Text>
      </View>
    </View>
    </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      
        <Text style={styles.headerText}></Text>
        <Header />
        <Boxes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    //backgroundColor: '#ff0000',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    //backgroundColor: '#00ff00',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inner: {
    flex: 1,
    backgroundColor: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});