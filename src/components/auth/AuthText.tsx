import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";

const AuthText = ({ subtitle }: { subtitle: string }) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(600).springify()}
      style={styles.textContainer}
    >
      <Text style={styles.title}>SocialVerse</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Animated.View>
  );
};

export default AuthText;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.black,
  },
});
