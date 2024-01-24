import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";

interface TabContainerProps {
    focused: boolean;
    children: React.ReactNode;
}

const TabContainer: React.FC<TabContainerProps> = ({ focused, children }) => {
    return (
        <View style={focused ? styles.focusedStyle : styles.notFocusedStyle}>
            {children}
        </View>
    );
};

export default TabContainer;

const styles = StyleSheet.create({
    focusedStyle: {
        paddingHorizontal: 15,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: Colors.gradient2,
        borderTopWidth: 5,
    },
    notFocusedStyle: {
        alignItems: "center",
        justifyContent: "center",
    },
});