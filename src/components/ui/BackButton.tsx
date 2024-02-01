import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/constants/Colors";

const { black, whiteBg } = Colors;

interface Props {
  handleBackButton: () => void;
  size?: number;
  inverted?: boolean;
}

const BackButton: React.FC<Props> = ({ handleBackButton, size = 20, inverted }) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(500).springify()}
      style={[styles.backButton, {
        backgroundColor: inverted ? whiteBg : black,
        height: size + 6,
        width: size + 6,
      }]}
    >
      <TouchableOpacity onPress={handleBackButton}>
        <Ionicons name="chevron-back" size={size} color={inverted ? black : whiteBg} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 0,
    left: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black,
  },
});
