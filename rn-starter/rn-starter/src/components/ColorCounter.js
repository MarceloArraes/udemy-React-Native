import { View, Button } from 'react-native';
import React from 'react';

function ColorCounter({ color, onIncrease, onDecrease }) {
  // eslint-disable-next-line no-param-reassign
  if (!color) color = 'purple';
  return (
    <View>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
}

export default ColorCounter;
