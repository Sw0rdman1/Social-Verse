import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OnlineUsers from './OnlineUsers';

interface InboxHeaderContentProps {
    unreadMessages: number;
}

const InboxHeaderContent: React.FC<InboxHeaderContentProps> = ({ unreadMessages }) => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.container, {
            paddingTop: top + 10,
        }]}>
            <Text style={styles.headerText}>Messages</Text>
            <OnlineUsers />
        </View>
    )
}

export default InboxHeaderContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 25,
    },
    headerText: {
        paddingHorizontal: 20,
        fontSize: 34,
        fontWeight: "bold",
        color: Colors.whiteBg,
    },
    subtitleContainer: {
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
    },
    subtitle: {
        fontSize: 18,
        color: Colors.whiteBg,
    },
    subtitleNumber: {
        fontSize: 24,
        color: Colors.whiteBg,
        fontWeight: "bold",
    },
    usersContainer: {
        marginTop: 10,
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    username: {
        marginTop: 5,
        fontSize: 10,
        color: Colors.whiteBg,
    },
    onlineIndicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: Colors.success,
        position: "absolute",
        bottom: 0,
        right: 0,
    }
})