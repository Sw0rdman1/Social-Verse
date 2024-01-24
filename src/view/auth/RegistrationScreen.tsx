import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "../../components/ui/Button";
import GradientBackground from "../../components/ui/GradientBackground";
import { StatusBar } from "expo-status-bar";
import LogInForm from "../../components/auth/login/LogInForm";
import Colors from "../../../assets/constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import { useEffect, useState } from "react";
import { AppleAuthButton } from "../../components/auth/AppleAuthButton";

const RegistrationScreen: React.FC<StackScreenProps<any>> = ({
  navigation,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
  }, []);

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

        <AppleAuthButton signIn={false} navigation={navigation} />
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
    height: 570,
    width: "100%",
    paddingBottom: 50,
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
});
