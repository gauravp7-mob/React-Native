import React,{useState} from 'react';
import {Text, View} from 'react-native';
import Child from './src/Child';
//import Child from './Child';
const App = () => { 

const[text,onChangeText] = useState('');
  
const submit= (value:string) =>{
  onChangeText(value);
}
const reset = () =>{
  onChangeText('');
}
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>{text}</Text>
      <Child submit = {submit} reset = {reset}/>

    </View>
  );
};

export default App;