import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import the icon sets you want to use
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLightTheme, setIsLightTheme] = useState(theme.backgroundColor === "#FFFFFF");

    const switchTheme = () => {
        setIsLightTheme(!isLightTheme)
        toggleTheme();
    }

    return (
        <View style={styles.container}>
            {!isLightTheme ?
                <TouchableOpacity onPress={switchTheme} style={styles.iconButton}>
                    <FontAwesome
                        name="sun-o" // Sun icon from FontAwesome
                        size={24}
                        color={theme.primaryColor}
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={switchTheme} style={styles.iconButton}>
                    <MaterialIcons
                        name="nights-stay" // Moon icon from MaterialIcons
                        size={24}
                        color={theme.primaryColor}
                    />
                </TouchableOpacity>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    iconButton: {
        marginHorizontal: 10,
    },
});

export default ThemeSwitch;
