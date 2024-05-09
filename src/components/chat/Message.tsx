import { StyleSheet, View } from 'react-native'
import MessageEntity from '../../models/Message'
import moment from 'moment'
import { useTheme } from '../../context/ThemeContext'
import Text from '../ui/Text'

interface MessageProps {
    message: MessageEntity
}

const MyMessage: React.FC<MessageProps> = ({ message }) => {
    const fromNow = moment(message.date).fromNow();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.primaryColorVariants.highOpacity, alignSelf: "flex-end" }]}>
            <Text style={styles.text}>{message.text}</Text>
            <Text style={[styles.time, { alignSelf: "flex-end" }]}> - {fromNow}</Text>
        </View>
    )
}

const TheirMessage: React.FC<MessageProps> = ({ message }) => {
    const fromNow = moment(message.date).fromNow();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, {
            shadowColor: theme.textColor,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: theme.backgroundColorPrimary
        }]}>
            <Text style={styles.text}>{message.text}</Text>
            <Text style={[styles.time, { alignSelf: "flex-end" }]}> - {fromNow}</Text>
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
        maxWidth: "80%",
        padding: 15,
        margin: 10,
        borderRadius: 20,
        gap: 10,
    },
    text: {
        fontSize: 18,
    },
    time: {
        fontSize: 12,
    },
})