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
import { Accelerometer } from 'expo-sensors';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';




const ShakeToNavigate = () => {
  const navigation = useNavigation();

  useEffect(() => {
    let lastShake = 0;
    let subscription;

    const subscribe = async () => {
      subscription = Accelerometer.addListener(accelerometerData => {
        const { x, y, z } = accelerometerData;
        const acceleration = Math.sqrt(x * x + y * y + z * z);

        const now = new Date().getTime();
        const delta = now - lastShake;

        if (delta > 10 && acceleration > 5) { 
          lastShake = now;
          navigation.navigate('Home'); 
        }
      });
    };

    subscribe();

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return null; 
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Home' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ title: 'Weather' }} name="MainPage" component={MainPage} />
        <Stack.Screen options={{ title: 'Details' }} name="Details" component={Details} />
        <Stack.Screen options={{ title: 'Astronomy' }} name="Astro" component={Astro} />
      </Stack.Navigator>
      <ShakeToNavigate /> 
    </NavigationContainer>
  );
}