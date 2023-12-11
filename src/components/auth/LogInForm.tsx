import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";

const LogInForm = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome back!</Text>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.black,
  },
});
