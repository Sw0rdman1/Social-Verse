import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SupabaseProvider } from "./src/context/SupabaseProvider";
import "react-native-gesture-handler";

export default function App() {
  return (
    <SupabaseProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SupabaseProvider>
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
