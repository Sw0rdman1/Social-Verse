import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "../components/ui/Button";
import GradientBackground from "../components/ui/GradientBackground";
import { StatusBar } from "expo-status-bar";
import LogInForm from "../components/auth/LogInForm";
import Colors from "../../assets/constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { AppleAuthButton } from "../components/auth/AppleAuthButton";
import RegistrationForm from "../components/auth/RegistrationForm";
import { useState } from "react";

const RegistrationScreen: React.FC<StackScreenProps<any>> = ({
  navigation,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <Animated.View style={styles.container} sharedTransitionTag="container">
      <GradientBackground>
        <StatusBar style="dark" />
        <Animated.View style={styles.formContainer} sharedTransitionTag="form">
          <RegistrationForm
            navigation={navigation}
            setButtonDisabled={setButtonDisabled}
          />
        </Animated.View>
        <Animated.View
          sharedTransitionTag="button-join-now"
          style={styles.buttonContainer}
        >
          <Button
            title="Join Now"
            onPress={() => navigation.goBack()}
            filled={buttonDisabled}
            color="transparent"
          />
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
          <AppleAuthButton signIn={false} />
        </Animated.View>
      </GradientBackground>
    </Animated.View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    position: "absolute",
    top: 0,
    height: 600,
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
    bottom: 150,
    left: "5%",
  },
  appleButton: {
    position: "absolute",
    bottom: 40,
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
