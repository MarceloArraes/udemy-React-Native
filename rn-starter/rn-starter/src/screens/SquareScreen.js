/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import { View } from 'react-native';
import React, { useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type + payload < 0 || type + payload > 255) return state;

  return { ...state, [type]: state[type] + payload };
};

function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { change_red: 0, change_green: 0, change_blue: 0 });
  // eslint-disable-next-line camelcase
  const { change_red, change_green, change_blue } = state;

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="green"
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
      />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${change_red},${change_green},${change_blue})` }} />
    </View>
  );
}

export default SquareScreen;
