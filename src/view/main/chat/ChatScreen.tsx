import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chat from "../../../models/Chat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../../assets/constants/Colors";
import GradientBackground from "../../../components/ui/GradientBackground";
import ChatMessages from "../../../components/chat/ChatMessages";
import { useBottomTab } from "../../../context/BottomBarContext";
import { useEffect } from "react";
import MessageInput from "../../../components/chat/MessageInput";
interface ChatScreenProps {
  route: any;
  navigation: any;
}



const ChatScreen: React.FC<ChatScreenProps> = ({ route, navigation }) => {
  const { chat } = route.params as { chat: Chat };

  const { top } = useSafeAreaInsets();

  const { setBottomTabVisible } = useBottomTab();

  const goBackHandler = () => {
    setBottomTabVisible(true);
    navigation.goBack();
  };

  useEffect(() => {
    setBottomTabVisible(false);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.container}
    >
      <GradientBackground inverted>
        <View style={[styles.headerContainer, { paddingTop: top }]}>
          <TouchableOpacity onPress={goBackHandler}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={Colors.whiteBg}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: chat.user.profilePicture }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{chat.user.displayName}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.white, width: "100%" }}>
          <ChatMessages />
          <MessageInput />
        </View>
      </GradientBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 15,
    backgroundColor: Colors.gradient2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.whiteBg,
  },
});
