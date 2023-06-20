import React from "react";
import {Text, View,Button} from 'react-native';

export interface GreetingProps{
    name  : String
}

export default function greeting(props:GreetingProps){
    return(
       
        <View style={{
            flex:0.1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text
                style={{
                    color:'red'
                }}>Welcome {props.name}</Text>
        </View>
    );
};