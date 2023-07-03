import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {MyContext} from './src/MyContext';
import ComponentA from './src/ComponentA';

export default function App() {
  const [name, setName] = useState('Gaurav');
  return (
    <SafeAreaView>
      <MyContext.Provider value={{name, setName}}>
        <Text>My name is {name}</Text>
        <ComponentA />
      </MyContext.Provider>
    </SafeAreaView>
  );
}
