import { Image, StyleSheet, Text, View } from 'react-native'
import Chat from '../../models/Chat';
import moment from 'moment';

interface InboxChatProps {
    chat: Chat;
}

const InboxChat: React.FC<InboxChatProps> = ({ chat }) => {
    const fromNow = moment(chat.lastMessageDate).fromNow();
    return (
        <View style={styles.container}>
            <Image source={{ uri: chat.user.profilePicture }} style={styles.avatar} />
            <View style={styles.rightContainer}>
                <View style={styles.rightTopContainer}>
                    <Text style={styles.username}>{chat.user.displayName}</Text>
                    <Text style={styles.date}>{fromNow}</Text>
                </View>
                <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
            </View>
        </View>

    )
}

export default InboxChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        gap: 15,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    rightContainer: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
    },
    rightTopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",
    },
    date: {
        fontSize: 14,
        color: "grey",
    },
})