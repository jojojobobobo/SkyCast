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
import { useEffect } from "react";

export default function Details({ route }) {
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
      <ScrollView>
        <View className="flex justify-center items-center">
          <View
            className="flex-row space-x-2 p-5 w-60"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/wind11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Wind Speed
                </Text>
                <Text className="text-white text-center font-semibold text-4xl">
                  {current?.wind_mph} mph
                </Text>
              </View>
            </View>
          </View>

          <View
            className="flex-row space-x-2 p-5 w-60"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/sunrise11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Sunrise
                </Text>
                <Text className="text-white text-center font-semibold text-4xl">
                  {weather?.forecast?.forecastday[0]?.astro.sunrise}
                </Text>
              </View>
            </View>
          </View>

          <View
            className="flex-row space-x-2 p-5 w-60"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/sunset11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Sunset
                </Text>
                <Text className="text-white text-center font-semibold text-4xl">
                  {weather?.forecast?.forecastday[0]?.astro.sunset}
                </Text>
              </View>
            </View>
          </View>

          <View
            className="flex-row space-x-2 items-center p-5"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/drop.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Humidity
                </Text>
                <Text className="text-white font-semibold text-4xl text-center">
                  {current?.humidity}%
                </Text>
              </View>
            </View>
          </View>
          <View
            className="flex-row space-x-2 items-center p-5"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/winddir.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Wind Direction
                </Text>
                <Text className="text-white font-semibold text-4xl text-center">
                  {current?.wind_dir}
                </Text>
              </View>
            </View>
          </View>
          <View
            className="flex-row space-x-2 items-center p-5"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/sunrise11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  UV Index
                </Text>
                <Text className="text-white font-semibold text-4xl text-center">
                  {current?.uv}
                </Text>
              </View>
            </View>
          </View>
          <View
            className="flex-row space-x-2 items-center p-5"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/feelslike11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Feels Like
                </Text>
                <Text className="text-white font-semibold text-4xl text-center">
                  {current?.feelslike_f}&#176;
                </Text>
              </View>
            </View>
          </View>
          <View
            className="flex-row space-x-2 items-center p-5"
            style={{ backgroundColor: theme.bgWhite(0.15), width: "100%" }}
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../icons/feelslike11.png")}
                className="h-10 w-10"
              />
              <View>
                <Text className="text-white font-semibold text-base">
                  Wind Gust
                </Text>
                <Text className="text-white font-semibold text-4xl text-center">
                  {current?.gust_mph} mph
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
