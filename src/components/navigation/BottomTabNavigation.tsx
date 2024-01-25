import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabContainer from "./TabContainer";
import Colors from "../../../assets/constants/Colors";
import HomeScreen from "../../view/main/HomeScreen";
import SearchScreen from "../../view/main/SearchScreen";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import HomeNavigation from "../../view/main/homeStack";
import { useBottomTab } from "../../context/BottomBarContext";


interface BottomNavigationProps {
    navigation: StackNavigationProp<any, any>
}

const BottomTabNavigation: React.FC<BottomNavigationProps> = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const [tabBarVisible, setTabBarVisible] = useState(true);
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
