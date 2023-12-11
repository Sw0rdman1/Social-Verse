import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const LogInForm = () => {
  const handleBackButton = () => {
    // Handle back button logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back!</Text>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.black,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
