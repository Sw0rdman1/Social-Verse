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

  const openPostHandler = () => {
    navigation.navigate("Post", { post: user, previousPage: "UserProfile" });
  };

  useEffect(() => {
    setBottomTabVisible(false);
  }, []);


  return (
    <View style={styles.container}>
      <UserImage
        user={user}
        goBackHandler={goBackHandler}
        openPost={openPostHandler}
      >
        <View style={styles.infoContainer}>
          <FollowerSection user={user} />
          <UserButtons user={user} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
          <UserFeed user={user} isFollowing={isFollowing} />
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
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    backgroundColor: Colors.whiteBg,
    marginTop: 20,
  },

});
