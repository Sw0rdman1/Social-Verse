import {
  StyleSheet,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import Colors from "../../assets/constants/Colors";
import PostImage from "../components/home/PostImage";
import AuthorInfo from "../components/home/AuthorInfo";
import InteractionSection from "../components/home/InteractionSection";
import PostDescription from "../components/home/PostDescription";
import CommentSection from "../components/home/CommentSection";

const PostScreen = ({ route, navigation }: any) => {
  const { post } = route.params;

  return (
    <Animated.View
      sharedTransitionTag={post.id}
      style={styles.container}
    >
      <PostImage post={post} goBackHandler={() => {
        navigation.goBack();
      }} >
        <View style={styles.infoContainer}>
          <PostDescription post={post} />
          <InteractionSection post={post} />
          <CommentSection post={post} />
          <View style={{ height: 50 }} />
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
    width: "100%",
    zIndex: 100,
    backgroundColor: Colors.whiteBg,
  },
});
