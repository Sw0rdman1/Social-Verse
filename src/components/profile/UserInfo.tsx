import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { User } from "../../models/User";
import Colors from "../../../assets/constants/Colors";

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const pressFollowHandler = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{user.displayName}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      {
        <TouchableOpacity
          onPress={pressFollowHandler}
          style={isFollowing ? styles.followingButton : styles.followButton}
        >
          <Text style={isFollowing ? styles.followingText : styles.followText}>
            {isFollowing ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: Colors.whiteBg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoContainer: {
    backgroundColor: Colors.whiteBg,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
  },
  email: {
    fontSize: 14,
    color: Colors.black,
  },
  followButton: {
    backgroundColor: Colors.gradient2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: 140,
    borderRadius: 20,
  },
  followText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  followingButton: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: 140,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gradient2,
  },
  followingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.gradient2,
  },
});
