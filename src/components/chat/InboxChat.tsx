import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chat from "../../models/Chat";
import moment from "moment";
import Animated from "react-native-reanimated";

interface InboxChatProps {
  chat: Chat;
  openChatHandler: (chat: Chat) => void;
}

const InboxChat: React.FC<InboxChatProps> = ({ chat, openChatHandler }) => {
  const fromNow = moment(chat.lastMessageDate).fromNow();
  return (
    <TouchableOpacity
      onPress={() => openChatHandler(chat)}
      style={styles.container}
    >
      <Animated.Image
        sharedTransitionTag={`avatar-${chat.id}`}
        source={{ uri: chat.user.profilePicture }}
        style={styles.avatar}
      />
      <View style={styles.rightContainer}>
        <View style={styles.rightTopContainer}>
          <Text style={styles.username}>{chat.user.displayName}</Text>
          <Text style={styles.date}>{fromNow}</Text>
        </View>
        <Text numberOfLines={2} style={styles.lastMessage}>
          {chat.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InboxChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
    gap: 5,
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
    height: 40,
    width: 250,
  },
  date: {
    fontSize: 14,
    color: "grey",
  },
});
