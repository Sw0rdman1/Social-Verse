import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chat from "../../../models/Chat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../../assets/constants/Colors";
import GradientBackground from "../../../components/ui/GradientBackground";
interface ChatScreenProps {
  route: any;
  navigation: any;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ route, navigation }) => {
  const { chat } = route.params as { chat: Chat };

  const { top } = useSafeAreaInsets();

  return (
    <GradientBackground inverted>
      <View style={[styles.headerContainer, { paddingTop: top }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={Colors.whiteBg}
          />
        </TouchableOpacity>
        <Animated.Image
          source={{ uri: chat.user.profilePicture }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{chat.user.displayName}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: Colors.white, width: "100%" }}>
        <Text>Chat</Text>
      </View>
    </GradientBackground>
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
