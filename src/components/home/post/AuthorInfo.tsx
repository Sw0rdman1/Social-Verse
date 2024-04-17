import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { User } from "../../../models/User";
import Animated from "react-native-reanimated";
import { useTheme } from "../../../context/ThemeContext";
interface AuthorInfoProps {
  author: User;
  openUserProfilHandler: (author: User) => void;
  enableNavigation?: boolean;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author, openUserProfilHandler, enableNavigation }) => {
  const { theme } = useTheme();

  return (
    enableNavigation ? (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
        onPress={() => openUserProfilHandler(author)}
      >
        <Animated.Image
          sharedTransitionTag={author.id + ".image"}
          source={{ uri: author.profilePicture }}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.name]} numberOfLines={1}>
            {author.displayName}
          </Text>
          <Text style={[styles.email]}>{author.email}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Animated.Image
          source={{ uri: author.profilePicture }}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.name, { color: theme.textColor }]} numberOfLines={1}>
            {author.displayName}
          </Text>
          <Text style={[styles.email, { color: theme.textColor }]}>{author.email}</Text>
        </View>
      </View>)
  );
};

export default AuthorInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    borderTopStartRadius: 40,
    height: 80,
  },
  name: {
    fontSize: 19,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  email: {
    fontSize: 13,
    fontWeight: "500",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 5,
  },
});
