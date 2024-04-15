import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Colors from "../../../../assets/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeHeader from "../../../components/home/HomeHeader";
import PostFeed from "../../../components/home/post/PostFeed";

interface HomeScreenProps {
  navigation: StackNavigationProp<any, any>;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <Animated.View style={{ flex: 1, backgroundColor: Colors.whiteBg, paddingBottom: 100 }} sharedTransitionTag="container">
      <HomeHeader />
      <Animated.View
        style={styles.formContainer}
        entering={FadeIn.delay(300).duration(500)}
      >
        <PostFeed navigation={navigation} />
      </Animated.View>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 120,
  },


});

