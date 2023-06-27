import React from 'react'
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from './Style'

function Settings({navigation}:any) {
  return (
    <View style={styles.mainView}>
        <Text>This is Settings</Text>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text>Home</Text></TouchableOpacity> */}
    </View>
  )
}

export default Settings