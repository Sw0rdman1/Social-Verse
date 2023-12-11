import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import BackButton from "../BackButton";
import AuthText from "../AuthText";
import Animated, { FadeInUp } from "react-native-reanimated";
import NewEmailInput from "./NewEmailInput";
import FullNameInput from "./FullNameInput";
import NewPasswordInput from "./NewPasswordInput";

interface Props {
  navigation: StackScreenProps<any>["navigation"];
  setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationForm = ({ navigation, setButtonDisabled }: Props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [displayName, setDisplayName] = useState({ value: "", error: "" });

  const customSetter = (
    newValue: Partial<{ value: string; error: string }>,
    field: string
  ) => {
    if (field === "email") {
      setEmail((prevValue) => ({
        ...prevValue,
        ...newValue,
      }));
    }

    if (field === "password") {
      setPassword((prevValue) => ({
        ...prevValue,
        ...newValue,
      }));
    }

    if (field === "displayName") {
      setDisplayName((prevValue) => ({
        ...prevValue,
        ...newValue,
      }));
    }
  };

  const handleBackButton = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      navigation.goBack();
    }, 250);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <BackButton handleBackButton={handleBackButton} />
      <AuthText subtitle="Create an account!" />
      <Animated.View entering={FadeInUp.delay(700).springify()}>
        <FullNameInput
          displayName={displayName}
          setDisplayName={customSetter}
        />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(800).springify()}>
        <NewEmailInput email={email} setEmail={customSetter} />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(900).springify()}>
        <NewPasswordInput password={password} setPassword={customSetter} />
      </Animated.View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
