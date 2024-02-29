import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabContainer from "./TabContainer";
import Colors from "../../../assets/constants/Colors";
import SearchScreen from "../../view/main/search/SearchScreen";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useBottomTab } from "../../context/BottomBarContext";
import HomeNavigation from "../../view/main/home/homeStack";
import SearchNavigation from "../../view/main/search/searchStack";
import CreatePostScreen from "../../view/main/createPost/CreatePostScreen";
import MyProfileNavigation from "../../view/main/myProfile/myProfileStack";


interface BottomNavigationProps {
    navigation: StackNavigationProp<any, any>
}

const BottomTabNavigation: React.FC<BottomNavigationProps> = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const { isBottomTabVisible } = useBottomTab();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:
                    isBottomTabVisible ? {
                        position: "absolute",
                        bottom: 35,
                        backgroundColor: Colors.black,
                        height: 60,
                        paddingBottom: 0,
                        marginHorizontal: 15,
                        borderRadius: 15,
                        shadowColor: Colors.black,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 0.6,
                        shadowRadius: 3,
                    } : {
                        display: "none"
                    }

            }}
        >
            <Tab.Screen
                name="HomeTab"
                children={() => (
                    <HomeNavigation />
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
                name="SearchTab"
                children={() => (
                    <SearchNavigation />
                )}
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
                    name="NewPostTab"
                    component={CreatePostScreen}

                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabContainer focused={focused} addPost>
                                    <Ionicons
                                        name="ios-add-sharp"
                                        size={32}
                                        style={{ fontWeight: "800" }}
                                        color={Colors.whiteBg}
                                    />
                                </TabContainer>
                            );
                        },
                        tabBarStyle: { display: "none" }
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
                name="MyProfileTab"
                children={() => (
                    <MyProfileNavigation />
                )}
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
