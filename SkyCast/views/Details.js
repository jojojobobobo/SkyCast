import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon, CalendarDaysIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native-gesture-handler";

export default function Details() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image
        blurRadius={70}
        source={require("../images/backgroundblurry.jpg")}
        className="absolute h-full w-full"
      />

      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <TouchableOpacity>
            <Text className="text-white">Air Speed</Text>
            <Image
              source={require("../icons/wind.png")}
              className="h-20 w-20"
            />
            <Text className="text-white font-semibold text-base">22km</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row space-x-2 items-center">
          <TouchableOpacity>
            <Text className="text-white">Air Speed</Text>
            <Image source={require("../icons/sun.png")} className="h-20 w-20" />
            <Text className="text-white font-semibold text-base">6:05AM</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row space-x-2 items-center">
          <TouchableOpacity>
            <Text className="text-white">Precipitation</Text>
            <Image
              source={require("../icons/drop.png")}
              className="h-20 w-20"
            />
            <Text className="text-white font-semibold text-base">23%</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
