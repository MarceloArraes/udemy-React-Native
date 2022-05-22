import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ComponentsScreen() {
  return (
    <View>
      <Text style={styles.component}>MARCELO ARRAES2</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  component: {
    fontSize: 30,
    color: 'purple',
  },
});
