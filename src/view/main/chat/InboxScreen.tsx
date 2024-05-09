import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import InboxHeader from "../../../components/chat/InboxHeader";
import InboxChat from "../../../components/chat/InboxChat";
import Chat, { useFakeChats } from "../../../models/Chat";
import moment from "moment";
import { sortByLastMessageDate } from "../../../utils/time";
import { useTheme } from "../../../context/ThemeContext";

interface InboxScreenProps {
  navigation: any;
}

const InboxScreen: React.FC<InboxScreenProps> = ({ navigation }) => {
  const chats = useFakeChats();
  const { theme } = useTheme();


  const openChatHandler = (chat: Chat) => {
    if (chat.lastMessageDate instanceof Date) {
      const date = moment(chat.lastMessageDate).fromNow();
      chat.lastMessageDate = date;
    }
    navigation.navigate("Chat", { chat });
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.backgroundColor }} />
      <InboxHeader navigation={navigation}>
        <View style={[styles.chatContainers, {
          backgroundColor: theme.backgroundColor,
          marginBottom: 100,
        }]}>
          {sortByLastMessageDate(chats)
            .map((chat, index) => (
              <InboxChat
                key={chat.id}
                index={index}
                chat={chat}
                openChatHandler={openChatHandler}
              />
            ))}
        </View>
      </InboxHeader>
    </>
  );
};

export default InboxScreen;

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
    flex: 1,
  },
});
