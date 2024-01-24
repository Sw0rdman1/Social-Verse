import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabContainer from "./TabContainer";
import Colors from "../../../assets/constants/Colors";
import HomeScreen from "../../view/main/HomeScreen";
import SearchScreen from "../../view/main/SearchScreen";

interface BottomTabNavigationProps {
}

const BottomTabNavigation: React.FC<BottomTabNavigationProps> = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 75,
                    backgroundColor: Colors.white,
                    borderTopColor: Colors.gray,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                children={() => (
                    <HomeScreen />
                )}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabContainer focused={focused}>
                                <Entypo
                                    name="home"
                                    size={26}
                                    color={focused ? Colors.gradient2 : Colors.gray}
                                />
                            </TabContainer>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabContainer focused={focused}>
                                <FontAwesome
                                    name="search"
                                    size={22}
                                    color={focused ? Colors.gradient2 : Colors.gray}
                                />
                            </TabContainer>
                        );
                    },
                }}
            />
            <Tab.Group>
                <Tab.Screen
                    name="NewPost"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabContainer focused={focused}>
                                    <Ionicons
                                        name="ios-add-sharp"
                                        size={32}
                                        style={{ fontWeight: "800" }}
                                        color={focused ? Colors.gradient2 : Colors.gray}
                                    />
                                </TabContainer>
                            );
                        },
                    }}
                />
            </Tab.Group>
            <Tab.Screen
                name="Chat"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabContainer focused={focused}>
                                <Entypo
                                    name="chat"
                                    size={24}
                                    color={focused ? Colors.gradient2 : Colors.gray}
                                />
                            </TabContainer>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabContainer focused={focused}>
                                <FontAwesome5
                                    name="user-alt"
                                    size={20}
                                    color={focused ? Colors.gradient2 : Colors.gray}
                                />
                            </TabContainer>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
