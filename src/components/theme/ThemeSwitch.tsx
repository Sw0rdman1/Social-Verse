import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import the icon sets you want to use
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const isLightTheme = theme.backgroundColor === '#FFFFFF'; // Assuming white background means light theme

    return (
        <View style={styles.container}>
            {/* Sun icon */}
            <TouchableOpacity onPress={toggleTheme} style={styles.iconButton}>
                <FontAwesome
                    name="sun-o" // Sun icon from FontAwesome
                    size={24}
                    color={isLightTheme ? theme.primaryColor : theme.textColor}
                />
            </TouchableOpacity>

            {/* Moon icon */}
            <TouchableOpacity onPress={toggleTheme} style={styles.iconButton}>
                <MaterialIcons
                    name="nights-stay" // Moon icon from MaterialIcons
                    size={24}
                    color={isLightTheme ? theme.textColor : theme.primaryColor}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        marginHorizontal: 10,
    },
});

export default ThemeSwitch;
