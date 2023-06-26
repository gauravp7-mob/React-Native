import React, { useState } from 'react';
import Login from './src/Login';
import { SafeAreaView, View } from 'react-native';
import { styles } from './src/Style';
import Register from './src/Register';

function App() {
  const[visible,setVisible] = useState(false)
  const onPressHandle=()=>{
    setVisible(true)
  }
  const onBackHandle=()=>{
    setVisible(false)

  }
  return (
    <SafeAreaView style={{flex:1}}>
        <Login onPressHandle={onPressHandle}/>
       <Register modalVisible={visible} onBackHandle={onBackHandle}/>
    </SafeAreaView>
   
  );
}

export default App;
