import React, { useState } from 'react'
import { Text,TextInput,View,FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'

interface CalculatorProps{
    arrayOfValue: string[]
}
const CalculatorComponent = (props:CalculatorProps) => {

  const[text,setText] = useState('');
    type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        <TouchableOpacity style={{margin:30}} onPress={()=>{handlePress(title)}} >
          <Text style={{fontSize:30}}>{title}</Text>
        </TouchableOpacity>
      );
     const[operator,setOperator] = useState('');

      const handlePress=(title:string)=>{
      console.log(title);
       if(title!='<' && title!='='){
        if(title!=="0"&&!parseInt(title)){
           setOperator(title);
           
        }
        setText(prev=>prev+title)
       }
       else if(title === '<'){
        setText(prev=>prev.slice(0,prev.length-1))
       }
       else if(title === '='){
        let arrayOfOperands:string[]= text.split(/[+-/*]/);
         console.log(arrayOfOperands);
        const op1 = parseInt(arrayOfOperands[0]);
        const op2 = parseInt(arrayOfOperands[1]);
        console.log(typeof(op2))
        console.log(operator)
          switch(operator){
            case '+':{
            const answer:number = op1+op2;
            console.log(answer)
            setText(prev=>prev+'='+answer)
            console.log(answer)
            break;
            }
            case '-':{
              const answer = op1-op2;
              setText(prev=>prev+'='+answer)
              break;
              }
            case '*':{
                const answer = op1*op2;
                setText(prev=>prev+'='+answer)
                break;
                }
            case '/':{
                  const answer = op1/op2;
                  setText(prev=>prev+'='+answer)
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
        borderWidth: 1,
        padding: 10,}}>{text}</TextInput> 
    </View>
    <View>
        <FlatList style={{margin:40}}
        data={props.arrayOfValue}
        renderItem={({item}) => <Item title={item} />}
        //horizontal={false}
        numColumns={4}
      />
    </View>
    </View>
  )
}

export default CalculatorComponent