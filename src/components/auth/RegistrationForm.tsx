import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import BackButton from "./BackButton";
import AuthText from "./AuthText";

interface Props {
  navigation: StackScreenProps<any>["navigation"];
  setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationForm = ({ navigation, setButtonDisabled }: Props) => {
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <BackButton handleBackButton={handleBackButton} />
      <AuthText subtitle="Create an account!" />
      <Text>RegistrationForm</Text>
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
  },
});
