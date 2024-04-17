import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { primaryColors } from '../../../assets/constants/theme';



const PrimaryColorSwitch = () => {
    const { theme, setPrimaryColor } = useTheme();

    // Handle primary color selection
    const handleColorSelection = (color: string) => {
        setPrimaryColor(color);
    };

    return (
        <View style={styles.container}>
            {primaryColors.map((color) => (
                <TouchableOpacity
                    key={color.hex}
                    onPress={() => handleColorSelection(color.rgb)}
                    style={[
                        styles.colorCircle,
                        { backgroundColor: color.hex },
                        // Highlight the selected color
                        `rgb(${color.rgb})` === theme.primaryColor && styles.selectedColorCircle,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default PrimaryColorSwitch;
