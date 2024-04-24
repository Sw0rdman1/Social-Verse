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
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.container, {
            }]}
        >
            {users.map((user, index) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => openUserProfilePage(user)}
                    key={user.id}
                >
                    <Animated.View
                        entering={FadeIn.delay(100 * index)}
                        exiting={FadeOut}
                        layout={Layout.delay(100)}
                        style={[styles.userContainer, {
                            backgroundColor: theme.backgroundColorPrimary,
                        }]}
                    >
                        <Animated.Image
                            sharedTransitionTag={user.id + "-search.image"}
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
            <View style={{ height: 150 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 40,
        marginTop: 110,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    avatar: {
        borderRadius: 200,
        marginRight: 16,
        height: 50,
        width: 50,
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
