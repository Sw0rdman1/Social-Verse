import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InboxScreen from "./InboxScreen";
import ChatScreen from "./ChatScreen";

const Stack = createNativeStackNavigator();

const ChatNavigation: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inbox"
                component={InboxScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />

        </Stack.Navigator>
    );
};

export default ChatNavigation;
