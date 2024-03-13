import { StyleSheet, Text, View } from 'react-native'
import MessageEntity from '../../models/Message'
import Colors from '../../../assets/constants/Colors'
import moment from 'moment'

interface MessageProps {
    message: MessageEntity
}

const MyMessage: React.FC<MessageProps> = ({ message }) => {
    const fromNow = moment(message.date).fromNow();

    return (
        <View style={[styles.container, { backgroundColor: Colors.gradient2 }]}>
            <Text style={styles.text}>{message.text}</Text>
            <Text style={styles.time}>{fromNow}</Text>
        </View>
    )
}

const TheirMessage: React.FC<MessageProps> = ({ message }) => {
    const fromNow = moment(message.date).fromNow();
    return (
        <View style={[styles.container, { backgroundColor: Colors.gray }]}>
            <Text style={styles.text}>{message.text}</Text>
            <Text style={styles.time}>{fromNow}</Text>
        </View>
    )
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const myID = "u1";
    const isMessageMine = message.senderId === myID;

    return (
        isMessageMine ? <MyMessage message={message} /> : <TheirMessage message={message} />
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        maxWidth: "80%",
        borderRadius: 20,
    },
    text: {
        color: "white",
    },
    time: {
        alignSelf: "flex-end",
        color: "white",
        opacity: 0.5,
    },
})