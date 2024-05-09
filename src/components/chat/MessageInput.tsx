import { StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import View from '../ui/View';
import { useTheme } from '../../context/ThemeContext';
import Animated, { FadeInDown } from 'react-native-reanimated';




const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { theme } = useTheme();

    const handleMessageChange = (text: string) => {
        setMessage(text);
    };

    const handleSendMessage = () => {
        // Logic to send the message
        console.log('Sending message:', message);
        setMessage('');
    };

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <View style={[styles.container, {
                backgroundColor: theme.backgroundColor,
            }]}>
                <TextInput
                    style={[styles.input, {
                        borderColor: theme.gray,
                        color: theme.textColor,
                    }]}
                    placeholder="Type your message..."
                    placeholderTextColor={theme.gray}
                    value={message}
                    onChangeText={handleMessageChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <TouchableOpacity style={[styles.iconContainer, {
                    backgroundColor: theme.primaryColor,
                }]} onPress={handleSendMessage}>
                    <Ionicons name="md-send" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {isFocused &&
                <Animated.View
                    entering={FadeInDown.delay(500).duration(500)}
                    style={{ height: 280, backgroundColor: theme.backgroundColorPrimary }}
                />
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingBottom: 30,
        paddingTop: 12,
    },
    input: {
        fontSize: 18,
        flex: 1,
        marginRight: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 16,
    },
    iconContainer: {
        padding: 8,
        borderRadius: 28,
    },
});

export default MessageInput;

