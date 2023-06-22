/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import CalculatorComponent from './src/CalculatorComponent';





function App() {
  
  const arrayOfValues:string[] = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','<'];
  return (
    <SafeAreaView style={{marginVertical:40}}>
      <CalculatorComponent arrayOfValue={arrayOfValues}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
