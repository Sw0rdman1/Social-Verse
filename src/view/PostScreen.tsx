import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import Colors from "../../assets/constants/Colors";
import PostImage from "../components/home/post/PostImage";
import AuthorInfo from "../components/home/post/AuthorInfo";
import InteractionSection from "../components/home/post/InteractionSection";
import PostDescription from "../components/home/post/PostDescription";
import CommentSection from "../components/home/comments/CommentSection";
import { useRef } from "react";

const PostScreen = ({ route, navigation }: any) => {
  const { post } = route.params;
  const scrolViewRef = useRef(null);

  const goBackHandler = () => {
    navigation.goBack();
  }

  return (

    <Animated.View
      sharedTransitionTag={post.id}
      style={styles.container}
    >
      <PostImage
        post={post}
        goBackHandler={goBackHandler}
        scrolViewRef={scrolViewRef}
      >
        <View style={styles.infoContainer}>
          <PostDescription post={post} />
          <InteractionSection post={post} />
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
    zIndex: 100,
    backgroundColor: Colors.whiteBg,
  },
  infoContainer: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: Colors.whiteBg,
  },
});
