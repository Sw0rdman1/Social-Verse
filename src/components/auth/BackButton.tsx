import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/constants/Colors";

const { black } = Colors;

interface Props {
  handleBackButton: () => void;
}

const BackButton: React.FC<Props> = ({ handleBackButton }) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(500).springify()}
      style={styles.backButton}
    >
      <TouchableOpacity onPress={handleBackButton}>
        <Ionicons name="chevron-back" size={20} color="white" />
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
    height: 26,
    width: 26,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black,
  },
});
