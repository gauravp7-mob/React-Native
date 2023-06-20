import React,{useState} from 'react';
import {TextInput,View,Button} from 'react-native';

interface childProps{
    submit:Function;
    reset:Function;
}
const Child=(props:childProps)=> {
    const[text, onChangeText] = useState('');
  return (
    <View >
    <TextInput 
        style = {{ height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,}}
        placeholder='Enter Value'
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='Submit' onPress={()=>props.submit(text)}/>
      <Button title = 'Reset' onPress={()=>props.reset()}/>

    </View>
  );
}



export default Child;
