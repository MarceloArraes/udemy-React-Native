import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Text>ColorScreen</Text>
      <Button title="Add a Color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{
            margin: 10, flexDirection: 'row', height: 100, width: 100, backgroundColor: item,
          }}
          />
        )}
      />
      <View style={{ height: 100, width: 100, backgroundColor: colors.lastIndexOf }} />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
