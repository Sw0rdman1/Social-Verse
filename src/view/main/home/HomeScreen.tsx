import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Colors from "../../../../assets/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeHeader from "../../../components/home/HomeHeader";
import PostFeed from "../../../components/home/post/PostFeed";
import { useTheme } from "../../../context/ThemeContext";
import PrimaryColorSwitch from "../../../components/theme/PrimaryColorSwitch";
import FeedTest from "../../../components/home/post/FeedTest";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get('window');

interface HomeScreenProps {
  navigation: StackNavigationProp<any, any>;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();

  const gradientPatern = [
    theme.primaryColor,
    theme.backgroundColor,
    theme.backgroundColor,
  ]

  const gradientContainerHeight = theme.backgroundColor === "#FFFFFF" ? height * 0.7 : height * 0.5

  return (
    <Animated.View style={{ flex: 1, backgroundColor: theme.backgroundColor }} sharedTransitionTag="container1">
      <LinearGradient colors={gradientPatern} style={[styles.gradientContainer, {
        height: gradientContainerHeight,
      }]} />
      <HomeHeader navigation={navigation} />
      <Animated.View
        style={styles.formContainer}
        entering={FadeIn.delay(300).duration(500)}
      >
        <FeedTest navigation={navigation} />

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
  gradientContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

  },
});

