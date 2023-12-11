import { StyleSheet, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const prefix = "../../../../assets/images/";
const images = [
  require(`${prefix}hero2.jpg`),
  require(`${prefix}hero1.jpg`),
  require(`${prefix}hero3.jpg`),
  require(`${prefix}hero4.jpg`),
];

const WelcomeScreenImages = () => {
  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(1200).duration(1500).springify()}
      >
        <Image source={images[0]} style={styles.image1} />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(900).duration(1000).springify()}
      >
        <Image source={images[1]} style={styles.image2} />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <Image source={images[2]} style={styles.image3} />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(300).duration(1500).springify()}
      >
        <Image source={images[3]} style={styles.image4} />
      </Animated.View>
    </>
  );
};

export default WelcomeScreenImages;

const styles = StyleSheet.create({
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 25,
    left: 180,
    transform: [{ rotate: "5deg" }],
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 40 }, { rotate: "-15deg" }],
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 150,
    left: -20,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "10deg" }],
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 70,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-10deg" }],
  },
});
