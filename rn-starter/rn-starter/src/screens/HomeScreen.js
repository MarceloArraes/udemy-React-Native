import React from 'react';
import {
  Text, StyleSheet, View, Button, TouchableOpacity,
} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 10, margin: 10 }}>
      <Text style={styles.text}>Marcelo Arraes</Text>
      <Button title="BOTAO NAVIGATE TO COMPONENTS" onPress={() => navigation.navigate('Components')} />
      <Button title="BOTAO NAVIGATE TO ListScreen" onPress={() => navigation.navigate('ListScreen')} />
      <Button title="BOTAO NAVIGATE TO CounterScreen" onPress={() => navigation.navigate('CounterScreen')} />
      <Button title="BOTAO NAVIGATE TO ColorScreen" onPress={() => navigation.navigate('ColorScreen')} />
      <Button title="BOTAO NAVIGATE TO SquareScreen" onPress={() => navigation.navigate('SquareScreen')} />
      <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
        <Text style={styles.text}>Image Screen  TouchableButton</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'purple',
  },
});

export default HomeScreen;
