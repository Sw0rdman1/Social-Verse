import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/user/MainScreen";
import PostScreen from "../screens/user/PostScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Post"
            component={PostScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
