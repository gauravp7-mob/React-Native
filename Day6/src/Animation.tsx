import React, {useEffect, useState} from 'react';
import {
  Animated,
  Modal,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Style';
interface Iprops {
  onAnimationBackHandle: Function;
  modalVisible: boolean;
}

function Animation(props: Iprops) {
  const value = useState(new Animated.Value(0))[0];
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  let color1:string=''
  let color2:string=''
  if(isEnabled){
     color1='black'
    color2='red'
  }
  else{
    color1='red'
    color2='black'
  }
  // useEffect(()=>{
  //   value.setValue(0);
  // },[isEnabled])
  const changeColor = () => {

    value.setValue(0)
    Animated.timing(value, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    if(isEnabled===false)
    setIsEnabled(true);
    else
    setIsEnabled(false);
  };
  return (
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      transparent={false}>
      <SafeAreaView style={styles.mainView}>
        <Animated.View
          style={{
            width: '100%',
            height: '120%',
            backgroundColor: value.interpolate({
              inputRange: [0, 1000],
              outputRange: [color1, color2],
            }),
          }}></Animated.View>
        <Switch
          style={{position: 'absolute'}}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeColor}
          value={isEnabled}
        />
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => props.onAnimationBackHandle()}>
          <Text style={[styles.text, {fontSize: 30}]}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

export default Animation;
