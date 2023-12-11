import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import BackButton from "./BackButton";
import AuthText from "./AuthText";

interface Props {
  navigation: StackScreenProps<any>["navigation"];
}

const LogInForm: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const customSetEmail = (
    newEmail: Partial<{ value: string; error: string }>
  ) => {
    setEmail((prevEmail) => ({
      ...prevEmail,
      ...newEmail,
    }));
  };

  const customSetPassword = (
    newPassword: Partial<{ value: string; error: string }>
  ) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      ...newPassword,
    }));
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BackButton handleBackButton={handleBackButton} />
      <AuthText subtitle="Welcome back!" />
      <Animated.View entering={FadeInUp.delay(700).springify()}>
        <EmailInput email={email} setEmail={customSetEmail} />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(800).springify()}>
        <PasswordInput password={password} setPassword={customSetPassword} />
      </Animated.View>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
