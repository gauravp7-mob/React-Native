import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
interface Iprops{
    isLoggedIn:boolean;

}
export default function Navigation(props:Iprops) {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer  > 
        <Stack.Navigator>
  {props.isLoggedIn ? (
    

    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Group>
  ) : (
   
    <Stack.Group >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Group>
  )}

  
</Stack.Navigator>
    </NavigationContainer>
  )
}
