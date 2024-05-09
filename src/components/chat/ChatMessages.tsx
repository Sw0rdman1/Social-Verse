import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { returnRandomMessages } from '../../models/Message'
import Message from './Message'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from '../../context/ThemeContext'

const ChatMessages = () => {
    const messages = returnRandomMessages("u1")
    const { theme } = useTheme();

    return (
        <FlatList
            style={[styles.container, {
                backgroundColor: theme.backgroundColor,
            }]}
            contentContainerStyle={{ paddingBottom: 150 }}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Message message={item} />}
            inverted
            ref={(ref) => {
                if (ref) {
                    ref.scrollToOffset({ offset: 0, animated: true })
                }
            }}
        />
    )
}

export default ChatMessages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})