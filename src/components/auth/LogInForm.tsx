import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

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
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Ionicons name="chevron-back" size={22} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>SocialVerse</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>
      <EmailInput email={email} setEmail={customSetEmail} />
      <PasswordInput password={password} setPassword={customSetPassword} />
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
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 20,
    height: 30,
    width: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
});
