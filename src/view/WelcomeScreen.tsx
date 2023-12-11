import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Animated, { BounceInRight, BounceInLeft } from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import WelcomeScreenImages from "../components/auth/WelcomeScreenImages";
import WelcomeScreenTitle from "../components/auth/WelcomeScreenTitle";
import Button from "../components/ui/Button";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const navigateToPage = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <GradientBackground>
        <View style={{ flex: 1, marginVertical: 50 }}>
          <WelcomeScreenImages />

          <WelcomeScreenTitle />

          <Animated.View
            entering={BounceInLeft.delay(2300).duration(1250)}
            sharedTransitionTag="button"
            style={[styles.button, { bottom: 80 }]}
          >
            <Button title="Sign In" onPress={() => navigateToPage("LogIn")} />
          </Animated.View>

          <Animated.View
            entering={BounceInRight.delay(2300).duration(1250)}
            style={[styles.button, { bottom: 0 }]}
          >
            <Button
              title="Join Now"
              filled
              color="transparent"
              onPress={() => navigateToPage("Registration")}
            />
          </Animated.View>
          <Animated.View
            sharedTransitionTag="form"
            style={{
              position: "absolute",
              top: -1050,
              height: 1000,
              width: "100%",
              paddingHorizontal: 22,
              backgroundColor: "white",
              borderRadius: 40,
            }}
          />
        </View>
      </GradientBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    position: "absolute",
    bottom: 0,
    left: "5%",
  },
});

export default WelcomeScreen;
