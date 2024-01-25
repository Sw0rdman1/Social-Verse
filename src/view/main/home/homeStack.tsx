import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './HomeScreen';
import React from 'react';
import PostScreen from '../PostScreen';

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
        </Stack.Navigator>

    )
}

export default HomeNavigation
