import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../../../assets/constants/Colors';
import GradientBackground from '../../../components/ui/GradientBackground';
import InboxHeader from '../../../components/chat/InboxHeader';
import InboxChat from '../../../components/chat/InboxChat';
import { useFakeChats } from '../../../models/Chat';

const InboxScreen = () => {

    const chats = useFakeChats();

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.gradient2 }} />
            <InboxHeader>
                <View style={styles.chatContainers}>
                    {chats.map((chat) => (
                        <InboxChat key={chat.id} chat={chat} />
                    ))}
                </View>
            </InboxHeader>
        </>
    )
}

export default InboxScreen

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        display: "flex",
    },
    headerContainer: {
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    chatContainers: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.whiteBg,
        flex: 1,

    }
})