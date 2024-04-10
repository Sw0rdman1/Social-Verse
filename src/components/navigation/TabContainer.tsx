import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";

interface TabContainerProps {
    focused?: boolean;
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
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    notFocusedStyle: {
        alignItems: "center",
        justifyContent: "center",
    },

});