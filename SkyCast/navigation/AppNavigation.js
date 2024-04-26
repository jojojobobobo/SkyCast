import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../views/Homescreen";
import MainPage from "../views/MainPage";
import Details from "../views/Details";
import Astro from "../views/Astro";
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ title: 'Home' }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ title: 'Weather' }}name="MainPage" component={MainPage} />
          <Stack.Screen options={{ title: 'Details' }}name="Details" component={Details} />
          <Stack.Screen options={{ title: 'Astronomy' }}name="Astro" component={Astro} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}