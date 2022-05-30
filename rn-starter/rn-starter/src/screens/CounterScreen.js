import { View, Text, Button } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  const { type, payload } = action;

  return { ...state, counter: state.counter + payload };
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>

      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: -1 })}
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
