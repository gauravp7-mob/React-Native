import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {flex:1, alignItems: 'center', justifyContent: 'center'},
  image: {
    height: 250,
    width: 220,
   
  },
  greyView: {
    backgroundColor: '#EEEEEE',
    width: '80%',
    borderRadius:15
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
  },
  text: {
    alignSelf: 'center',
    textDecorationColor: 'yellow',
    textShadowColor: 'grey',
    textShadowRadius: 1,
    fontSize: 40,
  },
  textInput: {
    borderBottomWidth: 2,
    width: '90%',
  },
  mobileIcon: {
    height: 40,
    width: 40,
  },
  button: {
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    position: 'absolute',
    top:620,
    width: 140,
    
  },
  buttonLogin:{
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    position: 'absolute',
    top:560,
    width: 100,
  },
  buttonBack:{
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    position: 'absolute',
    top:730,
    width: 140,
  },
  userImage:{
    height:70,
    width:70,
    borderRadius:50,
    alignSelf:'center',
    marginTop:20
  },
  cameraIcon:{
    height:10,
    width:15,
    position:'absolute',
    top:131,
    alignSelf:'center'

  }
});
