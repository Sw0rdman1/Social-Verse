import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./CreatePostScreen";

const Stack = createNativeStackNavigator();

const CreatePostNavigation: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CreatePost"
                component={CreatePostScreen}
                options={{ headerShown: false, gestureEnabled: false, presentation: 'modal' }}
            />
        </Stack.Navigator >
    );
};

export default CreatePostNavigation;
