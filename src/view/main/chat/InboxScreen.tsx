import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../../assets/constants/Colors";
import GradientBackground from "../../../components/ui/GradientBackground";
import InboxHeader from "../../../components/chat/InboxHeader";
import InboxChat from "../../../components/chat/InboxChat";
import Chat, { useFakeChats } from "../../../models/Chat";

interface InboxScreenProps {
  navigation: any;
}

const InboxScreen: React.FC<InboxScreenProps> = ({ navigation }) => {
  const chats = useFakeChats();

  const openChatHandler = (chat: Chat) => {
    navigation.navigate("Chat", { chat });
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.gradient2 }} />
      <InboxHeader>
        <View style={styles.chatContainers}>
          {chats
            .sort(
              (a, b) =>
                b.lastMessageDate.getTime() - a.lastMessageDate.getTime()
            )
            .map((chat, index) => (
              <InboxChat
                key={index}
                chat={chat}
                openChatHandler={openChatHandler}
              />
            ))}
          <View style={{ height: 100 }} />
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
    backgroundColor: Colors.whiteBg,
    flex: 1,
  },
});
