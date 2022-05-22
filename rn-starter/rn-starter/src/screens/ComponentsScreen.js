import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import beach from '../../assets/beach.jpg';
import forest from '../../assets/forest.jpg';
import mountain from '../../assets/mountain.jpg';

export default function ComponentsScreen() {
  return (
    <View style={styles.component}>
      <ImageDetail title="beach" imgSource={beach} score={9} />
      <ImageDetail title="forest" imgSource={forest} score={10} />
      <ImageDetail title="mountain" imgSource={mountain} score={5} />
    </View>
  );
}
const styles = StyleSheet.create({
  component: {
    fontSize: 30,
    color: 'purple',
  },
});
