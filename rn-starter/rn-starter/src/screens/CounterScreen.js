import { View, Text, Button } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + payload };
    case 'decrement':
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>

      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 2 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 2 })}
      />
      <Text style={{
        fontSize: 35, marginTop: 20, borderWidth: 2, borderColor: 'green',
      }}
      >
        CounterScreen
        {' '}
        {counter}
      </Text>
    </View>
  );
}
