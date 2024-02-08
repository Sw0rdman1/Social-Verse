import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useBottomTab } from "../../context/BottomBarContext";
import { useEffect, useState } from "react";
import UserImage from "../../components/profile/UserImage";
import Colors from "../../../assets/constants/Colors";
import UserInfo from "../../components/profile/UserInfo";
import FollowerSection from "../../components/profile/FollowerSection";
import UserButtons from "../../components/profile/UserButtons";
import UserFeed from "../../components/profile/UserFeed";
import { Post } from "../../models/Post";


const UserProfileScreen = ({ route, navigation }: any) => {
  const { user, previousPage } = route.params;
  const { setBottomTabVisible } = useBottomTab();

  const [isFollowing, setIsFollowing] = useState(user.isFollowing)

  const goBackHandler = () => {
    if (previousPage === "Search" || previousPage === "Home") {
      setBottomTabVisible(true);
    }
    navigation.goBack();
  };

  const openPostHandler = (post: Post) => {
    navigation.navigate("Post", { post: post, previousPage: "UserProfile" });
  };

  useEffect(() => {
    setBottomTabVisible(false);
  }, []);


  return (
    <View style={styles.container}>
      <UserImage
        user={user}
        goBackHandler={goBackHandler}
        isFollowing={isFollowing}
      >
        <View style={[styles.infoContainer, { height: isFollowing ? "auto" : 300, backgroundColor: isFollowing ? Colors.whiteBg : Colors.grayTransparentLess }]}>
          <FollowerSection user={user} isFollowing={isFollowing} />
          <UserButtons user={user} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
          <UserFeed user={user} isFollowing={isFollowing} openPost={openPostHandler} />
        </View>
      </UserImage>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: Colors.whiteBg,
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 25,
    paddingTop: 20,
  },

});
