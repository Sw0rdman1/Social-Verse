import { useAuth } from "../hooks/useAuth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../view/LoadingScreen";
import HomeScreen from "../view/main/home/HomeScreen";
import WelcomeScreen from "../view/auth/WelcomeScreen";
import LogInScreen from "../view/auth/LogInScreen";
import RegistrationScreen from "../view/auth/RegistrationScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import PostScreen from "../view/main/PostScreen";
import MainScreen from "../view/main/MainScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { user } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          {user ? (
            <>
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="LogIn"
                component={LogInScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false, gestureEnabled: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
