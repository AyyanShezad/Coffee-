import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './Screens/SignupScreen';
import { app, auth } from './firbase';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='login' component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUpScreen}></Stack.Screen  >
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen  >
      </Stack.Navigator>
    </NavigationContainer>
  );
};
