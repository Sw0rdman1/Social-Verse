import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (text: string) => {
        setMessage(text);
    };

    const handleSendMessage = () => {
        // Logic to send the message
        console.log('Sending message:', message);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={message}
                onChangeText={handleMessageChange}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={handleSendMessage}>
                <Ionicons name="md-send" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#f2f2f2',
    },
    input: {
        flex: 1,
        marginRight: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    iconContainer: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
});

export default MessageInput;

