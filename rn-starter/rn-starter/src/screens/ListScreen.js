import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import uuid from 'react-native-uuid';

export default function ListScreen() {
  const friends = [
    { name: 'Marcelo', age: '23' },
    { name: 'Marcelo2', age: '33' },
    { name: 'Marcelo3', age: '27' },
    { name: 'Marcelo4', age: '26' },
    { name: 'Marcelo5', age: '24' },
    { name: 'Marcelo6', age: '29' },
    { name: 'Marcelo57', age: '25' },
    { name: 'Marcelo8', age: '23' },
    { name: 'Marcelo9', age: '33' },
    { name: 'Marcelo10', age: '27' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        style={{ width: '100%' }}
        keyExtractor={(friend, index) => `${friend.name}${index}`}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.name}
            {' '}
            -
            {' '}
            {item.age}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    padding: 15,
    fontSize: 20,
    color: 'cyan',
    marginVertical: 50,
  },
});
