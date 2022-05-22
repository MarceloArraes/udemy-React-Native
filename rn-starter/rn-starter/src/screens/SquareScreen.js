import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounter';

function SquareScreen() {
  const [red, setRed] = useState(255);
  const [blue, setBlue] = useState(255);
  const [green, setGreen] = useState(255);

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setRed(red + 20)}
        onDecrease={() => setRed(red - 20)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setGreen(green + 20)}
        onDecrease={() => setGreen(green - 20)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setBlue(blue + 20)}
        onDecrease={() => setBlue(blue - 20)}
      />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
}

export default SquareScreen;
