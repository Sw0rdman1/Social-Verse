import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import PostScreen from '../PostScreen';
import SearchScreen from './SearchScreen';
import UserProfileScreen from '../UserProfileScreen';

const Stack = createNativeStackNavigator();


const SearchNavigation: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
        </Stack.Navigator>

    )
}

export default SearchNavigation
