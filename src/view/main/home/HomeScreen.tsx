import { StyleSheet, View, Image } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import GradientBackground from "../../../components/ui/GradientBackground";
import Colors from "../../../../assets/constants/Colors";
import PostsList from "../../../components/home/post/PostList";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { BOZA_URL } from "../../../models/User";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeScreenProps {
  navigation: StackNavigationProp<any, any>;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { top } = useSafeAreaInsets()

  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <View
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.gradient2,
        }}
      >
        <View style={[styles.titleContainer, { paddingTop: top, paddingBottom: 10 }]}>
          <Animated.Text
            style={styles.title}
            sharedTransitionTag="home-screen-title"
          >
            SocialVerse
          </Animated.Text>
          <Animated.Image
            entering={
              FadeIn.delay(300).duration(500)
            }
            source={{ uri: BOZA_URL }}
            style={styles.avatar}
          />
        </View>
        <Animated.View
          entering={
            FadeIn.delay(300).duration(500)
          }
          style={styles.borderRadiusContainer} />

        <Animated.View
          style={styles.formContainer}
          sharedTransitionTag="home-screen"
        >
          <PostsList navigation={navigation} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.whiteBg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 45,
  },
  titleContainer: {
    height: 130,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
    position: "relative",
    backgroundColor: Colors.gradient2,
    zIndex: 1,
    borderBottomRightRadius: 40,
  },

  borderRadiusContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: 130,
    backgroundColor: Colors.whiteBg,
    zIndex: -1,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.grayTransparentMore,
  },
  title: {
    color: Colors.whiteBg,
    fontWeight: "700",
    fontSize: 40,
  },

});

