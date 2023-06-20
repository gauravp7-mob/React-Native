import React,{useState} from 'react';
import {Text, View,Button} from 'react-native';
import Counter from './Counter';
import Greeting from './Greeting';
const App = () => {
  const[count, setCount] = useState<number>(0);
  const increase=()=>{

    setCount(count+1);
  }
  const decrease=()=>{

    setCount(count-1);
  }
  const reset=()=>{
    setCount(0)
  }

  const name = "Gaurav";
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Greeting name = {name}/>
      <Counter count={count} reset={reset} increase = {increase} decrease = {decrease}/>
      
      
    </View>
  );
};

export default App;