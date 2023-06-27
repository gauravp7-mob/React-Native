import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { styles } from './Style'


function Home({navigation}:any) {
  return (
    <View style={styles.mainView}>
        <Text>This is Home</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Settings")}><Text  style={styles.text}>Settings</Text></TouchableOpacity>
    </View>
  )
}

export default Home