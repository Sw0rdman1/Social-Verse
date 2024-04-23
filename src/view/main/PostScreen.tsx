import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import PostImage from "../../components/home/post/PostImage";
import InteractionSection from "../../components/home/post/InteractionSection";
import PostDescription from "../../components/home/post/PostDescription";
import CommentSection from "../../components/home/comments/CommentSection";
import { useEffect, useRef, useState } from "react";
import { useBottomTab } from "../../context/BottomBarContext";
import { User } from "../../models/User";
import { useTheme } from "../../context/ThemeContext";

const PostScreen = ({ route, navigation }: any) => {
  const { post, previousPage } = route.params;
  const scrolViewRef = useRef(null);
  const [enableNavigation, setEnableNavigation] = useState(false);
  const { theme } = useTheme();

  const { setBottomTabVisible } = useBottomTab();

  const openUserProfilHandler = (author: User) => {
    navigation.navigate("UserProfile", { user: author, previousPage: "Post" });
  };

  const goBackHandler = () => {
    if (previousPage === "Search" || previousPage === "Home") {
      setBottomTabVisible(true);
    }
    navigation.goBack();
  };

  useEffect(() => {

    setBottomTabVisible(false);
    if (previousPage === "Search" || previousPage === "Home") {
      setEnableNavigation(true);
    }
  }, []);

  return (
    <Animated.View
      sharedTransitionTag="container"
      style={[styles.container, {
        backgroundColor: theme.backgroundColorPrimary,
      }]}
    >
      <PostImage
        post={post}
        goBackHandler={goBackHandler}
        scrolViewRef={scrolViewRef}
      >
        <View style={styles.infoContainer}>
          <PostDescription post={post} />
          <InteractionSection
            post={post}
          />
          <CommentSection
            post={post}
            scrolViewRef={scrolViewRef}
          />
        </View>
      </PostImage>
    </Animated.View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    paddingBottom: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
