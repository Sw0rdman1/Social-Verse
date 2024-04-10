import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import RootNavigation from "./src/navigation";
import { AppProvider } from "./src/context/AppContext";
import "react-native-gesture-handler";
import { BottomTabProvider } from "./src/context/BottomBarContext";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BottomTabProvider>
          <StatusBar style="auto" />
          <RootNavigation />
        </BottomTabProvider>
      </AppProvider >
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
