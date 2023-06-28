import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Style'

type dataType ={
  id:number,
  task:string,
  isCompleted:boolean
}
export default function Details(props:any) {
 
 const url = "https://649bc4d6048075719236e50a.mockapi.io/task/Task/"

 const [data, setData] = useState<dataType[]>();
 const fetchData=()=>{
 axios.get(url).then((res)=>setData(res.data)).catch((error) => console.error(error))
 }

 
 const onDeleteHandler=(id:number)=>{

    axios.delete(url+id)
    .then((res)=>{
        setData(res.data);
        Alert.alert("Record Updated with Id :" + res.data.id)
        props.navigation.navigate("Details")
    })
    .catch((error)=>console.error(error))

 }
 useEffect(()=>{
    fetchData()
 },[data])
 
 useEffect(()=>{
    const sub = props.navigation.addListener("focus",()=>{
         fetchData()
    })
    return sub;
},[props.navigation])
 

  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",borderWidth:2,justifyContent:"space-around"}}>
        <Text style={styles.columnHeadText}>ID</Text>
        <Text style={styles.columnHeadText}>Task</Text>
        <Text style={styles.columnHeadText}>Done</Text>
        <Text style={styles.columnHeadText}>Edit</Text>
        <Text style={styles.columnHeadText}>Delete</Text>
      </View>
      <FlatList data={data}
      renderItem={({item,index})=>
      <View style={{flexDirection:'row',borderWidth:2, justifyContent:"space-around",backgroundColor:index%2?"#FFE4A7":"#FFFAD7"}} >
      <View>
      <Text>{item.id} </Text>
      </View>
      <View>
        <Text>{item.task} </Text>
        </View>
        <View>
        <Text>{item.isCompleted+""}</Text>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Update",item)}><Text>Edit</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{onDeleteHandler(item.id)}}><Text>Delete</Text></TouchableOpacity>
      
      </View>
    }
      ></FlatList>
    </SafeAreaView>
  )
}
