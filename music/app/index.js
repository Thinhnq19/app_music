import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/splash';
import Homescreen from '../screen/home_screen';

const Stack = createStackNavigator();

export default function Index() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false }} />
        <Stack.Screen name="Homescreen" component={Homescreen} options={{headerShown: false }} />
      </Stack.Navigator>
    );
}