import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "../components/ui/Button";
import GradientBackground from "../components/ui/GradientBackground";
import { StatusBar } from "expo-status-bar";
import LogInForm from "../components/auth/login/LogInForm";
import Colors from "../../assets/constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { AppleAuthButton } from "../components/auth/AppleAuthButton";

const LogInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <Animated.View style={styles.container} sharedTransitionTag="container">
      <GradientBackground>
        <StatusBar style="dark" />
        <Animated.View style={styles.formContainer} sharedTransitionTag="form">
          <LogInForm navigation={navigation} />
        </Animated.View>
        <Animated.View
          sharedTransitionTag="button-sign-in"
          style={styles.buttonContainer}
        >
          <Button title="Sign In" onPress={() => navigation.goBack()} />
        </Animated.View>
        <Animated.View
          style={styles.appleButton}
          entering={FadeInDown.delay(200).springify()}
        >
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.text}> or </Text>
            <View style={styles.line} />
          </View>
          <AppleAuthButton signIn />
        </Animated.View>
      </GradientBackground>
    </Animated.View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    position: "absolute",
    top: 0,
    height: 540,
    width: "100%",
    paddingBottom: 30,
    backgroundColor: Colors.whiteBg,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 200,
    left: "5%",
  },
  appleButton: {
    position: "absolute",
    bottom: 90,
    left: "5%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.white,
  },
  lineContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  line: {
    marginTop: 5,
    height: 1,
    width: 120,
    backgroundColor: Colors.white,
  },
});
