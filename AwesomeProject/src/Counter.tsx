import React from 'react';
import {Text, View,Button} from 'react-native';

export interface CounterProps{
    count:number;
    reset: Function
    increase: Function
    decrease: Function
}
export default function counter(props:CounterProps){
    
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{props.count}</Text>
      <View 
        style={{
            flexDirection:'row'
        }}>
      <Button title = 'Reset' onPress ={()=>props.reset()}/>
      <Button title = 'Increase' onPress={()=>props.increase()}/>
      <Button title = 'Decrease' onPress={()=>props.decrease()}/>
      </View>
    </View>
  );
};

