import React, { useState } from 'react';
import Login from './src/Login';
import { SafeAreaView, View } from 'react-native';
import Register from './src/Register';
import Animation from './src/Animation';

function App() {
  const[visible,setVisible] = useState(false)
  const[animationVisible,setAnimationVisible] = useState(false)
  const onPressHandle=()=>{
    setVisible(true)
  }
  const onBackHandle=()=>{
    setVisible(false)

  }
  const onPressAnimationHandle=()=>{
    setAnimationVisible(true)

  }
  const onAnimationBackHandle=()=>{
    setAnimationVisible(false)
  }
  return (
    <SafeAreaView style={{flex:1}}>
        <Login onPressHandle={onPressHandle} onPressAnimationHandle={onPressAnimationHandle}/>
       <Register modalVisible={visible} onBackHandle={onBackHandle}/>
        <Animation modalVisible={animationVisible} onAnimationBackHandle={onAnimationBackHandle}/> 
    </SafeAreaView>
   
  );
}

export default App;
