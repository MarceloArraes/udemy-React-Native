import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ComponentsScreen from './ComponentsScreen';
import ListScreen from './ListScreen';

function HomeScreen() {
  return (
    <View>
      <Text style={styles.text}>Marcelo Arraes</Text>
      <ComponentsScreen />
      <ListScreen />
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
