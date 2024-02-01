import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useBottomTab } from "../../context/BottomBarContext";
import { useEffect } from "react";
import UserImage from "../../components/profile/UserImage";
import Colors from "../../../assets/constants/Colors";
import UserInfo from "../../components/profile/UserInfo";
import FollowerSection from "../../components/profile/FollowerSection";

const UserProfileScreen = ({ route, navigation }: any) => {
  const { user, previousPage } = route.params;
  const { setBottomTabVisible } = useBottomTab();

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
        <FollowerSection user={user} />
        <View style={{ height: 700 }} />
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
    backgroundColor: Colors.whiteBg,
    paddingBottom: 30,
  },
});
