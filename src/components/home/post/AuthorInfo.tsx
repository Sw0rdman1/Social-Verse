import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { User } from "../../../models/User";
import Colors from "../../../../assets/constants/Colors";
import Animated from "react-native-reanimated";
interface AuthorInfoProps {
  author: User;
  openUserProfilHandler: (author: User) => void;
  enableNavigation?: boolean;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  author,
  openUserProfilHandler,
  enableNavigation
}) => {
  return (
    enableNavigation ? (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
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
        style={styles.container}
      >
        <Animated.Image
          source={{ uri: author.profilePicture }}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.name]} numberOfLines={1}>
            {author.displayName}
          </Text>
          <Text style={[styles.email]}>{author.email}</Text>
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
    marginTop: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
    borderTopEndRadius: 40,
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
