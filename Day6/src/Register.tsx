import React from 'react'
import { styles } from './Style'
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
interface Iprops{
  modalVisible:boolean,
  onBackHandle:Function
}
function Register(props:Iprops) {
  return (
    <Modal  animationType="slide" visible={props.modalVisible} transparent={false} >
    <View style= {styles.mainView} >
        <View style={styles.greyView}>
            <Text style={styles.text}>Register</Text>
            <Image style={styles.userImage} source={{uri:'https://www.telegraph.co.uk/multimedia/archive/03171/mr_bean_edit_3171783b.jpg'}}/>
            <Image style={styles.cameraIcon} source={{uri:'https://cdn-icons-png.flaticon.com/128/45/45010.png'}}/>

        <View style={styles.inputView}>

          <Image
            style={[styles.mobileIcon, {marginRight: 10}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"></TextInput>
        </View>
        <View style={styles.inputView}>
          <Image
            style={[styles.mobileIcon, {marginRight: 10}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1295/1295181.png',
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Address"></TextInput>
        </View>
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
        <TouchableOpacity style={styles.button} onPress={()=>props.onBackHandle()}>
        <Text style={[styles.text, {fontSize: 30}]}>Back</Text>
      </TouchableOpacity>

    </View>
    </Modal>
  )
}

export default Register