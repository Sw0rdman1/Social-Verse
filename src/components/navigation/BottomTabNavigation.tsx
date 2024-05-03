import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabContainer from "./TabContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useBottomTab } from "../../context/BottomBarContext";
import HomeNavigation from "../../view/main/home/homeStack";
import SearchNavigation from "../../view/main/search/searchStack";
import MyProfileNavigation from "../../view/main/myProfile/myProfileStack";
import ChatNavigation from "../../view/main/chat/chatStack";
import { useTheme } from "../../context/ThemeContext";


interface BottomNavigationProps {
    navigation: StackNavigationProp<any, any>
}

const BottomTabNavigation: React.FC<BottomNavigationProps> = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const { isBottomTabVisible } = useBottomTab();
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:
                    isBottomTabVisible ? {
                        width: "70%",
                        backgroundColor: theme.backgroundColorPrimary,
                        height: 65,
                        paddingBottom: 0,
                        marginHorizontal: 15,
                        borderTopColor: "transparent",
                        borderRadius: 35,
                        shadowColor: theme.textColor,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.65,
                        shadowRadius: 3,
                        position: "absolute",
                        bottom: 40,
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
                                    color={focused ? theme.primaryColor : theme.gray}
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
                                    color={focused ? theme.primaryColor : theme.gray}
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
                                    color={focused ? theme.primaryColor : theme.gray}
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
