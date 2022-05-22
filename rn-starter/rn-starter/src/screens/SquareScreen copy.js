/* eslint-disable no-unused-expressions */
/* import { View } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

function SquareScreen() {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

  const setColor = (color, change, setNewColor) => {
    (color + change < 0 || color + change > 255) ? null : setNewColor(color + change);
  };

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor(red, COLOR_INCREMENT, setRed)}
        onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setRed)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setColor(green, COLOR_INCREMENT, setGreen)}
        onDecrease={() => setColor(green, -1 * COLOR_INCREMENT, setGreen)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setColor(blue, COLOR_INCREMENT, setBlue)}
        onDecrease={() => setColor(blue, -1 * COLOR_INCREMENT, setBlue)}
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
}

export default SquareScreen;
 */
