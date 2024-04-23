import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { primaryColors } from '../../../assets/constants/theme';



const PrimaryColorSwitch = () => {
    const { theme, setPrimaryColor } = useTheme();

    // Handle primary color selection
    const handleColorSelection = (color: string) => {
        setPrimaryColor(color);
    };

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={toggleMenu}
                style={[
                    styles.colorCircle,
                    { backgroundColor: theme.primaryColor },
                    styles.selectedColorCircle,
                ]}
            />
            {showMenu && (
                <View style={[styles.menu, {
                    backgroundColor: theme.backgroundColor,
                    shadowColor: theme.textColor,
                }]}>
                    {primaryColors.map((color) => (
                        <TouchableOpacity
                            key={color.hex}
                            onPress={() => {
                                handleColorSelection(color.rgb);
                                toggleMenu();
                            }}
                            style={[
                                styles.colorCircle,
                                { backgroundColor: color.hex },
                            ]}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    colorCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    selectedColorCircle: {
        borderColor: 'black', // You can customize this border color for the selected color
        borderWidth: 2, // Increase the border width for the selected color
    },
    menu: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        paddingVertical: 15,
        borderRadius: 30,
        gap: 5,
    },
});

export default PrimaryColorSwitch;
