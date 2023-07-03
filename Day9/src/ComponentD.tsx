import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {MyContext} from './MyContext';

export default function ComponentD() {
  const {name, setName} = useContext(MyContext);
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Component D</Text>
      <Text>My name is {name}</Text>
      <TextInput placeholder="Enter Name" onChangeText={setText} />
      <Button
        title="submit"
        onPress={() => {
          setName(text);
        }}
      />
    </View>
  );
}
