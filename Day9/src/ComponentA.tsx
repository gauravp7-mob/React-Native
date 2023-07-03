import React from 'react';
import {View, Text} from 'react-native';
import ComponentB from './ComponentB';

export default function ComponentA() {
  return (
    <View>
      <Text>Component A</Text>
      <ComponentB />
    </View>
  );
}
