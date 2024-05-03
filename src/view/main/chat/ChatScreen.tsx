import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Chat from "../../../models/Chat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../../assets/constants/Colors";
import { useBottomTab } from "../../../context/BottomBarContext";
import { useEffect } from "react";
import View from "../../../components/ui/View";
import Text from "../../../components/ui/Text";
import { useTheme } from "../../../context/ThemeContext";
import ChatMessages from "../../../components/chat/ChatMessages";
import { BlurView } from "expo-blur";
import MessageInput from "../../../components/chat/MessageInput";
interface ChatScreenProps {
  route: any;
  navigation: any;
}



const ChatScreen: React.FC<ChatScreenProps> = ({ route, navigation }) => {
  const { chat } = route.params as { chat: Chat };
  const { top } = useSafeAreaInsets();
  const { theme } = useTheme();

  const { setBottomTabVisible } = useBottomTab();

  const goBackHandler = () => {
    setBottomTabVisible(true);
    navigation.goBack();
  };


  useEffect(() => {
    setBottomTabVisible(false);

    return () => {
      setBottomTabVisible(true);
    };
  }, []);



  return (
    <View style={styles.container}>
      <BlurView
        intensity={35}
        tint={theme.backgroundColor === "#FFFFFF" ? "light" : "dark"}
        style={[styles.headerContainer, { paddingTop: top, backgroundColor: theme.primaryColorVariants.highOpacity }]}>
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
      </BlurView>
      <ChatMessages />
      <MessageInput />

    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 120,
    zIndex: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 15,
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
