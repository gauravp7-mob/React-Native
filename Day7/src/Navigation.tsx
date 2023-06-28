import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Details from './Details';
import Home from './Home';
import AddDetails from './AddDetails';
import UpdateDetails from './UpdateDetails';

export default function Navigation() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={Home}/>
            <Stack.Screen name = "Details" component={Details}/>
            <Stack.Screen name = "AddDetails" component={AddDetails}/>
            <Stack.Screen name = "Update" component = {UpdateDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
