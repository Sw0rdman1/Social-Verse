import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import Colors from "../../assets/constants/Colors";
import { useEffect, useState } from "react";
import FormsTemplate from "../components/auth/welcome/FormsTemplate";
import { useAuth } from "../hooks/useAuth";
import HomeScreenTemplate from "../components/HomeScreenTemplate";

const LoadingScreen = ({ route, navigation }: any) => {
  const { loadingData, initialized, user } = useAuth();
  const [fontSize, setFontSize] = useState(60);

  useEffect(() => {
    if (!initialized) return;

    if (!user) {
      setFontSize(60);
      navigation.navigate("Welcome");
    } else if (!loadingData) {
      setFontSize(40);
      navigation.navigate("Home");
    }
  }, [initialized, user, loadingData]);

  return (
    <Animated.View style={styles.fullContainer} sharedTransitionTag="container">
      <GradientBackground centerItems>
        {initialized && user && (
          <View style={styles.container}>
            <Animated.Text
              entering={FadeInDown.delay(500).duration(500)}
              style={[styles.title, { fontSize }]}
              sharedTransitionTag="home-screen-title"
            >
              SocialVerse
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(700).duration(500)}
              style={styles.subtitle}
            >
              New era of social networking
            </Animated.Text>
          </View>
        )}
        <FormsTemplate />
        <HomeScreenTemplate />
      </GradientBackground>
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
    color: Colors.white,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: Colors.titleColor,
  },
});
