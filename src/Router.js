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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="District" component={District} />
        <Stack.Screen name="Pharmancy" component={Pharmancy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
