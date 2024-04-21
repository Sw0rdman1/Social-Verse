import React, { useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { User } from "../../models/User";
import { StackNavigationProp } from "@react-navigation/stack";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import { useTheme } from "../../context/ThemeContext";
import Text from "../ui/Text";

interface SearchResultsProps {
    users: User[];
    navigation: StackNavigationProp<any, any>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ users, navigation }) => {
    const { theme } = useTheme();

    const openUserProfilePage = (user: User) => {
        navigation.navigate("UserProfile", {
            user,
            previousPage: "Search",
        });
    };

    return (
        <ScrollView style={[styles.container, {}]}>
            {users.map((user, index) => (
                <TouchableOpacity
                    onPress={() => openUserProfilePage(user)}
                    key={user.id}
                >
                    <Animated.View
                        entering={FadeIn.delay(100 * index)}
                        exiting={FadeOut}
                        layout={Layout.delay(100)}
                        style={styles.userContainer}
                    >
                        <Animated.Image
                            sharedTransitionTag={user.id + ".image"}
                            source={{ uri: user.profilePicture }}
                            style={styles.avatar}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.firstName}>{user.displayName}</Text>
                            <Text style={styles.email}>{user.email.toLowerCase()}</Text>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            ))}
            <View style={{ height: 120 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: "flex",
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        marginTop: 150,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
    },
    avatar: {
        borderRadius: 200,
        marginRight: 16,
        height: 60,
        width: 60,
    },
    userInfo: {
        flex: 1,
    },
    firstName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: "gray",
    },
});

export default SearchResults;
