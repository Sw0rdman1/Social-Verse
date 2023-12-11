import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Animated, { BounceInLeft, BounceInRight } from "react-native-reanimated";
import Button from "../ui/Button";

interface Props {
  navigation: StackScreenProps<any>["navigation"];
}

const WelcomeScreenButtons: React.FC<Props> = ({ navigation }) => {
  const navigateToPage = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <>
      <Animated.View
        entering={BounceInLeft.delay(2300).duration(1250)}
        sharedTransitionTag="button"
        style={[styles.button, { bottom: 80 }]}
      >
        <Button title="Sign In" onPress={() => navigateToPage("LogIn")} />
      </Animated.View>

      <Animated.View
        entering={BounceInRight.delay(2300).duration(1250)}
        style={[styles.button, { bottom: 0 }]}
      >
        <Button
          title="Join Now"
          filled
          color="transparent"
          onPress={() => navigateToPage("Registration")}
        />
      </Animated.View>
    </>
  );
};

export default WelcomeScreenButtons;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    position: "absolute",
    bottom: 0,
    left: "5%",
  },
});
