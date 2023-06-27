import React from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './Style'

interface Iprops{
    onPressHandle:Function
    onPressAnimationHandle:Function,
}
export default function Login(props:Iprops) {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/free-vector/vintage-black-tailor-label-template_1284-40618.jpg',
        }}
      />
      <View style={styles.greyView}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.inputView}>
          <Image
            style={[styles.mobileIcon, {marginRight: 10}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15/15874.png',
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={()=>props.onPressHandle()}>
        <Text style={[styles.text, {fontSize: 30}]}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack} >
        <Text style={[styles.text, {fontSize: 30}]} onPress={()=>props.onPressAnimationHandle()}>Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

