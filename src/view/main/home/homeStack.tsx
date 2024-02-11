import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import PostScreen from "../PostScreen";
import UserProfileScreen from "../UserProfileScreen";

const Stack = createNativeStackNavigator();

const HomeNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
