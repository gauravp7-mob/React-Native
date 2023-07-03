import React from 'react';
import {View, Text} from 'react-native';
import ComponentD from './ComponentD';

export default function ComponentC() {
  return (
    <View>
      <Text>Component C</Text>
      <ComponentD />
    </View>
  );
}
