import React from 'react'
import { View, Button } from 'react-native'

export default function Home({navigation}:any) {
    
  return (
    <View>
        <Button title = "Get Details" onPress={()=>navigation.navigate("Details")}/>
        <Button title = "Add Details" onPress={()=>navigation.navigate("AddDetails")}/>
        
    </View>
  )
}
