import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './navigation/AppNavigation';
const Stack = createStackNavigator();
export default function App() {
  return (
      <AppNavigation/>
  );
}


