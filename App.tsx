import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import "react-native-gesture-handler";
import WelcomeScreen from "./src/view/auth/WelcomeScreen";
import { StackScreenProps } from "@react-navigation/stack";
import RootNavigation from "./src/navigation";

type RootStackParamList = {
  Welcome: undefined;
  // Add other screen names and their respective params here
};

type Props = StackScreenProps<RootStackParamList, "Welcome">;

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
