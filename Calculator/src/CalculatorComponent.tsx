import React, { useState } from 'react'
import { Text,TextInput,View,FlatList, TouchableOpacity, Dimensions, StyleSheet, Button } from 'react-native'

interface CalculatorProps{
    arrayOfValue: string[]
}
const CalculatorComponent = (props:CalculatorProps) => {

  const[text,setText] = useState('');
    // type ItemProps = {title: string};
    // const Item = ({title}: ItemProps) => (
    //     <TouchableOpacity style={{margin:30}} onPress={()=>{handlePress(title)}} >
    //       <Text style={{fontSize:30}}>{title}</Text>
    //     </TouchableOpacity>
    //   );
    const[operator,setOperator] = useState('');

      const handlePress=(title:string)=>{
      console.log(title);
      if(title!='<' && title!='=' && title!='Reset'){
        if(title!=="0"&&!parseInt(title)){
          setOperator(title);
          
        }
        setText(prev=>prev+title)
      }
      else if(title === '<'){
        setText(prev=>prev.slice(0,prev.length-1))
      }
      else if(title === "Reset"){
        setText('');
      }
      else if(title === '='){
        let arrayOfOperands:string[]= text.split(/[+-/*]/);
        console.log(arrayOfOperands);
        let op1 = parseInt(arrayOfOperands[0]);
        let op2 = parseInt(arrayOfOperands[1]);
        console.log(typeof(op2))
        console.log(operator)
          switch(operator){
            case '+':{
            const answer:number = op1+op2;
            console.log(answer)
            op1=answer
            setText(answer+'')
            console.log(answer)
            break;
            }
            case '-':{
              const answer = op1-op2;
              op1=answer
              setText(answer+'')
              break;
              }
            case '*':{
                const answer = op1*op2;
                op1=answer
                setText(answer+'')
                break;
                }
            case '/':{
                  const answer = op1/op2;
                  op1=answer
                  setText(answer+'')
                  break;
                }
          }
      }
      }
  return (
    <View>
    <View>
      <TextInput style = {{ height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,}}>{text}</TextInput> 
    </View>
    <View>
        <FlatList style={styles.flatList}
        data={props.arrayOfValue}
        numColumns={4}
        renderItem={({item}) => {
          return <TouchableOpacity style={styles.button} onPress={()=>{handlePress(item)}} >
        <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>} }
        //horizontal={false}
      />
    </View>
    </View>
  )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  flatList:{margin:40,
    paddingTop:100},

  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  }
});

export default CalculatorComponent