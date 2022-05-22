/* eslint-disable no-unused-expressions */
import { View } from 'react-native';
import React, { useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { colorToChange, amount } = action;

  if (colorToChange + amount < 0 || colorToChange + amount > 255) return state;

  return { ...state, [colorToChange]: state[colorToChange] + amount };
};

function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="green"
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
}

export default SquareScreen;
