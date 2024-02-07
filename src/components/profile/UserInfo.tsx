import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { User } from "../../models/User";
import Colors from "../../../assets/constants/Colors";
import { Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown } from "react-native-reanimated";

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const pressFollowHandler = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(500).duration(500)}
      style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{user.displayName}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="email" size={22} color={Colors.whiteBg} />
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

    </Animated.View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoContainer: {
    textAlign: "left",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  username: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.white,
  },
  email: {
    fontSize: 18,
    marginLeft: 5,
    color: Colors.white,
  },
  // followButton: {
  //   backgroundColor: Colors.gradient2,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingVertical: 10,
  //   width: 140,
  //   borderRadius: 20,
  // },
  // followText: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: Colors.white,
  // },
  // followingButton: {
  //   backgroundColor: Colors.white,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingVertical: 10,
  //   width: 140,
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   borderColor: Colors.gradient2,
  // },
  // followingText: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: Colors.gradient2,
  // },
});
