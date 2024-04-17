import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Colors from "../../../../assets/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeHeader from "../../../components/home/HomeHeader";
import PostFeed from "../../../components/home/post/PostFeed";
import { useTheme } from "../../../context/ThemeContext";
import PrimaryColorSwitch from "../../../components/theme/PrimaryColorSwitch";

interface HomeScreenProps {
  navigation: StackNavigationProp<any, any>;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <Animated.View style={{ flex: 1, backgroundColor: theme.backgroundColor, paddingBottom: 100 }} sharedTransitionTag="container">
      <HomeHeader />
      <PrimaryColorSwitch />
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
  },


});

