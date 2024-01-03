import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import Colors from "../../assets/constants/Colors";
import { useAuth } from "../hooks/useAuth";
import PostsList from "../components/auth/home/PostList";

const HomeScreen = ({ navigation }: any) => {
  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <GradientBackground inverted centerItems>
        <View
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Text
            style={styles.title}
            sharedTransitionTag="home-screen-title"
          >
            SocialVerse
          </Animated.Text>
          <Animated.View
            style={styles.formContainer}
            sharedTransitionTag="home-screen"
          >
            <PostsList navigation={navigation} />
          </Animated.View>
        </View>
      </GradientBackground>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    height: "80%",
    width: "100%",
    backgroundColor: Colors.whiteBg,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 45,
    position: "absolute",
    top: "10%",
  },
});
