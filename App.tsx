import "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthContext";
import RootNavigation from "./src/navigation";
import { AppProvider } from "./src/context/AppContext";
import { BottomTabProvider } from "./src/context/BottomBarContext";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <BottomTabProvider>
            <RootNavigation />
          </BottomTabProvider>
        </AppProvider >
      </AuthProvider>
    </ThemeProvider>
  );
}

