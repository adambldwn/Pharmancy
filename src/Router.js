import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {District,Home,Pharmancy} from "./pages"

const Stack = createStackNavigator();

export const Router= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"SEHIRLER", 
            headerStyle:{backgroundColor:"#b71c1c"},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'},
            }}/>
        <Stack.Screen
          name="District"
          component={District} 
          options={{
            title:"ILCELER", 
            headerStyle:{backgroundColor:"#b71c1c"},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'},
            }}
          />
        <Stack.Screen
          name="Pharmancy"
          component={Pharmancy}
          options={{
            title:"ECZANE", 
            headerStyle:{backgroundColor:"#b71c1c"},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'},
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
