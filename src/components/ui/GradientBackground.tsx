import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../context/ThemeContext";
import { Dimensions, StyleSheet } from "react-native";


const { height } = Dimensions.get("window");

const GradientBackground = () => {
  const { theme } = useTheme();

  const gradientPatern = [
    theme.primaryColor,
    theme.backgroundColorPrimary,
  ]

  const gradientContainerHeight = theme.backgroundColor === "#FFFFFF" ? height * 0.8 : height * 0.8

  return (
    <LinearGradient
      colors={gradientPatern}
      style={[styles.gradientContainer, { height: gradientContainerHeight }]}
    />
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  gradientContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

  },
});
