import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon, CalendarDaysIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import { useCallback } from "react";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { weatherImages } from "../constants";
export default function MainPage() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const getDetails = () => {
    navigation.navigate("Details", { weather });
  };

  const navigation = useNavigation();

  const handleLocation = (loc) => {
    console.log("location", loc);
    setLocations([]);
    toggleSearch(false);
    fetchWeatherForecast({
      cityName: loc.name,
      days: 7,
    }).then((data) => {
      setWeather(data);
      console.log("got forecast: ", data);
    });
  };

  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setLocations(data);
      });
    }
  };
  useEffect(() =>{
    fetchMyWeatherData();
  },[]);
  const fetchMyWeatherData = async () => {
    fetchWeatherForecast({
      cityName: "Loudonville, NY",
      days: 7,
    }).then((data) => {
      setWeather(data);
      

    })
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const { current, location } = weather;
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image
        blurRadius={70}
        source={require("../images/backgroundblurry.jpg")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        {/* search section */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                onChangeText={handleTextDebounce}
                placeholder="Search City"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 pb-1 flex-1 text-base text-white"
              />
            ) : null}
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-grey-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400:"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p03 px-4 mb-1 " +
                      borderClass
                    }
                  >
                    <MapPinIcon size="20" color="gray" />
                    <Text className="text-black text-lg ml-2">
                      {loc?.name}, {loc?.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forecast section */}

        {/* location */}
        <Text className="text-white text-center text-2xl font-bold">
          {location?.name},
          <Text className="text-lg  font-semibold text-gray-300 ">
            {" " + location?.country}
          </Text>
        </Text>
        {/* weather image */}
        <View className="flex-row justify-center ">
          <Image
            source={weatherImages[current?.condition?.text]}
            className="w-52 h-52"
          />
        </View>
        {/* degree fahrenheit */}
        <View className="space-y-2">
          <Text className="text-center font-bold text-white text-6xl ml-5">
            {current?.temp_f}&#176;
          </Text>

          <Text className="text-center text-white text-xl tracking-widest">
            {current?.condition?.text}
          </Text>
        </View>

        {/* other stats */}
        <View className="text-white flex-row mx-4 text-center justify-center">
          <TouchableOpacity
            className="justify-between mx-4 text-center  rounded-3xl p-10"
            onPress={getDetails}
          >
            <Text
              className="text-white bg-blue-600 mt-5  text-2xl border-2 rounded-3xl h-10 w-70"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              See Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* next days forecast */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-white mt-5 text-base border-solid border-radius5">
              {" "}
              Daily Forecast{" "}
            </Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showHorizontalScrollIndicator={false}
          >
            {
            weather?.forecast?.forecastday?.map((item, index) => {
              let date = new Date(item.date);
              let options = {weekday: 'long'};
              let dayName = date.toLocaleDateString('en-US', options);
              dayName = dayName.split(",")[0];
              return (
                <View
                  className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                  style={{ backgroundColor: theme.bgWhite(0.15) }}
                >
                  <Image
                    source={weatherImages[item?.day?.condition?.text]}
                    className="h-11 w-11"
                  />
                  <Text className="text-white">{dayName}</Text>
                  <Text className="text-white text-xl font-semibold">
                    {item?.day?.avgtemp_f}&#176;
                  </Text>
                </View>
              );
            })}

          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
