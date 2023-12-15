import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import Colors from "../../assets/constants/Colors";
import { useEffect, useState } from "react";
import FormsTemplate from "../components/auth/welcome/FormsTemplate";
import { useAuth } from "../hooks/useAuth";
import HomeScreenTemplate from "../components/HomeScreenTemplate";

const LoadingScreen = ({ navigation }: { navigation: any }) => {
  const { user, signOut, initialized } = useAuth();
  const [fontSize, setFontSize] = useState(60);
  const [loadingData, setLoadingData] = useState(false);

  const simulateLoadingData = async () => {
    setLoadingData(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoadingData(false);
  };

  useEffect(() => {
    if (user) {
      simulateLoadingData();
      setFontSize(40);
      navigation.replace("Home");
    }
  }, []);

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
    fontSize: 60,
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
