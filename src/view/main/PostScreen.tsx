import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";
import PostImage from "../../components/home/post/PostImage";
import InteractionSection from "../../components/home/post/InteractionSection";
import PostDescription from "../../components/home/post/PostDescription";
import CommentSection from "../../components/home/comments/CommentSection";
import { useEffect, useRef, useState } from "react";
import { useBottomTab } from "../../context/BottomBarContext";
import { User } from "../../models/User";

const PostScreen = ({ route, navigation }: any) => {
  const { post, previousPage } = route.params;
  const scrolViewRef = useRef(null);
  const [commentsDisplayed, setCommentsDisplayed] = useState(false);
  const [enableNavigation, setEnableNavigation] = useState(false);

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
    <Animated.View sharedTransitionTag={post.id} style={styles.container}>
      <PostImage
        post={post}
        goBackHandler={goBackHandler}
        scrolViewRef={scrolViewRef}
        openUserProfilHandler={openUserProfilHandler}
        enableNavigation={enableNavigation}
      >
        <View style={styles.infoContainer}>
          <PostDescription post={post} />
          <InteractionSection
            post={post}
            setCommentsDisplayed={setCommentsDisplayed}
            commentsDisplayed={commentsDisplayed}
          />
          <CommentSection
            post={post}
            scrolViewRef={scrolViewRef}
            commentsDisplayed={commentsDisplayed}
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
    zIndex: 100,
    backgroundColor: Colors.whiteBg,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: Colors.whiteBg,
    paddingBottom: 30,
  },
});
