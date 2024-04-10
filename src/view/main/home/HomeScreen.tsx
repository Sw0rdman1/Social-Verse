import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Colors from "../../../../assets/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import TestPostList from "../../../components/home/post/Test";
import HomeHeader from "../../../components/home/HomeHeader";

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
        <TestPostList navigation={navigation} />
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

