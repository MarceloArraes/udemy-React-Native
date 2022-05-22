import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>
        CounterScreen
        {' '}
        {counter}
      </Text>
      <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
}
