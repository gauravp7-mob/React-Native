import React from 'react';
import {View, Text} from 'react-native';
import ComponentC from './ComponentC';

export default function ComponentB() {
  return (
    <View>
      <Text>Component B</Text>
      <ComponentC />
    </View>
  );
}
