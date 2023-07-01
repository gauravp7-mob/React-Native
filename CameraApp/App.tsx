import React, {useEffect, useRef, useState} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const devices = useCameraDevices('ultra-wide-angle-camera');
  const device = devices.back;
  const camera: any = useRef(null);
  const [photoData, setPhotoData] = useState('');
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
  };
  if (device == null) return <ActivityIndicator style={{flex: 1}} />;

  const clickPhoto = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      setPhotoData(photo.path);
      setClicked(false);
      console.log(photo);
    }
  };
  return (
    <View style={{flex: 1}}>
      {clicked ? (
        <View style={{flex: 1}}>
          <Camera
            style={StyleSheet.absoluteFill}
            ref={camera}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#CD1818',
              position: 'absolute',
              bottom: 50,
              alignSelf: 'center',
            }}
            onPress={() => clickPhoto()}></TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
          }}>
          {photoData !== '' && (
            <Image
              style={{width: '80%', height: '70%', margin: 10}}
              source={{uri: 'file://' + photoData}}
            />
          )}
          <TouchableOpacity
            style={{
              width: '90%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 10,
            }}
            onPress={() => setClicked(true)}>
            <Text>Click Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default App;
