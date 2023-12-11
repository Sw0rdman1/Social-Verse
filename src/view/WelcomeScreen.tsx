import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Animated, { BounceInRight, BounceInLeft } from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import WelcomeScreenImages from "../components/auth/welcome/WelcomeScreenImages";
import WelcomeScreenTitle from "../components/auth/welcome/WelcomeScreenTitle";
import Button from "../components/ui/Button";
import WelcomeScreenButtons from "../components/auth/welcome/WelcomeScreenButtons";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <GradientBackground>
        <View style={{ flex: 1, marginVertical: 50 }}>
          <WelcomeScreenImages />
          <WelcomeScreenTitle />
          <WelcomeScreenButtons navigation={navigation} />
          <Animated.View
            sharedTransitionTag="form"
            style={{
              position: "absolute",
              top: -1050,
              height: 1000,
              width: "100%",
              paddingHorizontal: 22,
              backgroundColor: "white",
              borderRadius: 50,
            }}
          />
        </View>
      </GradientBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
