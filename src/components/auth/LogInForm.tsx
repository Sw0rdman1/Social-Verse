import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

interface Props {
  navigation: StackScreenProps<any>["navigation"];
}

const LogInForm: React.FC<Props> = ({ navigation }) => {
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Ionicons name="chevron-back" size={22} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back!</Text>
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
    paddingTop: 50,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: Colors.black,
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
