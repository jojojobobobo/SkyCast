import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon, CalendarDaysIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native-gesture-handler";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import {useEffect} from 'react';
export default function Details({route}) {
 

  const { weather } = route.params;
  const { current } = weather;
  
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image
        blurRadius={70}
        source={require("../images/backgroundblurry.jpg")}
        className="absolute h-full w-full"
      />

      <View className="flex justify-center items-center">
        <View className="flex-row space-x-2 items-center p-5" style={{ backgroundColor: theme.bgWhite(0.15) }}>
          <TouchableOpacity>
          <Image
              source={require("../icons/wind.png")}
              className="h-20 w-20"/>
            <Text className="text-white font-semibold text-base">Air Speed</Text>
            
            <Text className="text-white text-center font-semibold text-base">{current?.wind_kph}km</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row space-x-2 items-center p-5" style={{ backgroundColor: theme.bgWhite(0.15)}}>
          <TouchableOpacity>
          <Image source={require("../icons/sun.png")} className="h-20 w-20" />
            <Text className="text-white text-center">Sunrise</Text>
            
            <Text className="text-white text-center font-semibold text-base">{weather?.forecast?.forecastday[0]?.astro.sunrise}</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row space-x-2 items-center p-5" style={{ backgroundColor: theme.bgWhite(0.15)}}>
          <TouchableOpacity>
          <Image
              source={require("../icons/drop.png")}
              className="h-20 w-20"
            />
            <Text className="text-white">Humidity</Text>
            
            <Text className="text-white font-semibold text-base text-center ">{current?.humidity}%</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
