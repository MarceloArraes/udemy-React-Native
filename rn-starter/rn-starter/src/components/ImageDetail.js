import React from 'react';
import { Text, Image, View } from 'react-native';

export default function ImageDetail({ title, imgSource, score }) {
  return (
    <View>
      <Image source={imgSource} />
      <Text>
        IMAGE Detail
        {' '}
        {title}
      </Text>
      <Text>
        Image Score -
        {' '}
        {score}
      </Text>
    </View>
  );
}
