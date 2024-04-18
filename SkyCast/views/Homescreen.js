import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const weatherIconUrl =
    "https://cdn-icons-png.flaticon.com/512/10127/10127236.png";

  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sky Cast</Text>
      <Image source={{ uri: weatherIconUrl }} style={styles.weatherIcon} />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {    
    fontSize: 36,     
  },
buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 25,
    width: 250,
    alignItems: "center",
    
  },
  weatherIcon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
