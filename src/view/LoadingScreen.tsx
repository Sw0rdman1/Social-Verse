import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { useEffect, useState } from "react";
import FormsTemplate from "../components/auth/welcome/FormsTemplate";
import HomeScreenTemplate from "../components/HomeScreenTemplate";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";

const LoadingScreen = ({ navigation }: any) => {
  const { currentUser, loading } = useAppContext();
  const [fontSize, setFontSize] = useState(60);
  const { loadingTheme, theme } = useTheme();


  useEffect(() => {
    if (loading) return;

    if (currentUser.displayName === "") {
      setFontSize(60);
      navigation.navigate("Welcome");
    } else {
      setFontSize(40);
      navigation.navigate("Main");
    }
  }, [currentUser, loading]);

  if (loadingTheme) {
    return <View />;
  }

  return (
    <Animated.View style={styles.fullContainer} sharedTransitionTag="container">
      <LinearGradient colors={[theme.primaryColor, theme.backgroundColor, theme.backgroundColor, theme.backgroundColor, theme.backgroundColor, theme.primaryColor,]} style={styles.fullContainer}>
        {loading && currentUser && (
          <View style={styles.container}>
            <Animated.Text
              entering={FadeInDown.delay(500).duration(500)}
              style={[styles.title, { fontSize, color: theme.primaryColor }]}
              sharedTransitionTag="home-screen-title"
            >
              SocialVerse
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(700).duration(500)}
              style={[styles.subtitle, { color: theme.textColor }]}
            >
              New era of social networking
            </Animated.Text>
          </View>
        )}
        <FormsTemplate />
        <HomeScreenTemplate />
      </LinearGradient>
    </Animated.View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  fullContainer: {
    width: "100%",
    flex: 1,
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
