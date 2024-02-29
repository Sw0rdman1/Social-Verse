import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../PostScreen";
import MyProfileScreen from "./MyProfileScreen";

const Stack = createNativeStackNavigator();

const MyProfileNavigation: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyProfile"
                component={MyProfileScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                name="Post"
                component={PostScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
        </Stack.Navigator>
    );
};

export default MyProfileNavigation;
