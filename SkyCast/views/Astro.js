import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon, CalendarDaysIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native-gesture-handler";
import {
  fetchLocations,
  fetchWeatherForecast,
  fetchAstro,
} from "../api/weather";
import { useEffect } from "react";
import { useState } from "react";
// export default function Astro({ route }) {
//   const { weather } = route.params;
//   const { current } = weather;

//   return (
//     <View className="flex-1 relative">
//       <StatusBar style="dark" />
//       <Image
//         blurRadius={70}
//         source={require("../images/backgroundblurry.jpg")}
//         className="absolute h-full w-full"
//       />
//       <View className="flex justify-center items-center"></View>

//       </View>

//   );
// }

export default function Astro({ route }) {
  const { weather } = route.params;
  const { current } = weather;

  // State to hold astronomy data
  const [astroData, setAstroData] = useState(null);

  useEffect(() => {
    // Fetch astronomy data when the component mounts
    const fetchAstronomyData = async () => {
      try {
        const params = {
          cityName: weather?.location?.name || "Loudonville, NY", // Default to a city if no location available
        };
        const astroResponse = await fetchAstro(params);
        setAstroData(astroResponse.astronomy); // Assuming response structure has an astronomy object
      } catch (error) {
        console.error("Error fetching astronomy data:", error);
      }
    };

    fetchAstronomyData(); // Call the function
  }, [weather]); // Fetch data whenever weather prop changes

  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image
        blurRadius={70}
        source={require("../images/backgroundblurry.jpg")}
        className="absolute inset-0"
      />
     
      <View className="flex justify-center items-center pt-14">
        <Image source={require("../images/sun.png")} className="w-24 h-24" />
        <Text className="text-white text-5xl font-bold">Sun Stats</Text>
      </View>
      
      
      {astroData && (
        <View className="flex justify-center items-center">
          
          <Text className="text-white text-2xl">Sunrise: {astroData.astro.sunrise}</Text>
          <Text className="text-white   text-2xl pb-20">Sunset: {astroData.astro.sunset}</Text>
          <View className="items-center">
            <Image source={require("../icons/moon.png")} className="w-20 h-20" />
            <Text className="text-white text-5xl font-bold">Moon Stats</Text>
          </View>
          <Text className="text-white text-2xl">Moonrise: {astroData.astro.moonrise}</Text>
          <Text className="text-white  text-2xl">Moonset: {astroData.astro.moonset}</Text>
          <Text className="text-white  text-2xl">Moon Phase: {astroData.astro.moon_phase}</Text>
          <Text className="text-white text-2xl">Moon Illumination: {astroData.astro.moon_illumination}%</Text>
          {/* Add more astronomy stats as needed */}
        </View>
      )}
    </View>
  );
}
