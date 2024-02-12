import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/constants/Colors";

interface TabContainerProps {
    focused: boolean;
    children: React.ReactNode;
    addPost?: boolean;
}

const TabContainer: React.FC<TabContainerProps> = ({ focused, children, addPost }) => {
    return (
        <View style={addPost ? styles.addPostStyle : focused ? styles.focusedStyle : styles.notFocusedStyle}>
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
        borderTopColor: Colors.gradient2,
        borderTopWidth: 5,
        padding: 12,

    },
    notFocusedStyle: {
        alignItems: "center",
        justifyContent: "center",
    },
    addPostStyle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 30,
        backgroundColor: Colors.gradient2,
        position: "absolute",
        bottom: 10,
        shadowColor: Colors.gradient2,
    },
});