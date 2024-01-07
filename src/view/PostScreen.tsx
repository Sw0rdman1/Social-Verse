import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Animated as RNAnimated,
  Text,
} from "react-native";
import Animated, {
  FadeInDown,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Colors from "../../assets/constants/Colors";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("screen");

const PostScreen = ({ route, navigation }: any) => {
  const { post } = route.params;
  console.log(`post.${post.id}.image`);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const gesture = Gesture.Pan()
    .onUpdate((value) => {
      translateX.value = value.translationX * 0.8;
      translateY.value = value.translationY * 0.8;
      const distance = Math.sqrt(
        value.translationX * value.translationX +
          value.translationY * value.translationY
      );
      const scaleValue = Math.min(Math.max(distance / 100, 1), 0.9);
      scale.value = withTiming(scaleValue, { duration: 100 });
    })
    .onEnd(() => {
      if (translateY.value > 50) {
        opacity.value = 0;
        runOnJS(navigation.goBack)();
      } else {
        translateX.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(0, { duration: 300 });
        scale.value = withTiming(1, { duration: 300 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    backgroundColor: interpolateColor(
      opacity.value,
      [0, 1],
      ["transparent", "white"]
    ),
    borderRadius: 20,
    overflow: "hidden",
  }));

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
      sharedTransitionTag={post.id}
    >
      <Animated.Image
        sharedTransitionTag={post.id + ".image"}
        source={{ uri: post.contentPhoto }}
        style={styles.image}
      />
      <Animated.View style={styles.overlay} />
      <Animated.View
        style={styles.formContainer}
        entering={FadeInDown.duration(700).delay(300)}
      >
        <Swipe />
        <View style={styles.form}></View>
      </Animated.View>
    </Animated.View>
  );
};
const Swipe = () => {
  const animated = new RNAnimated.Value(0);
  const duration = 1500;

  useEffect(() => {
    RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(animated, {
          toValue: 10,
          duration: duration,
          useNativeDriver: true,
        }),
        RNAnimated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <RNAnimated.View
      style={[
        {
          transform: [{ translateY: animated }],
          width: "100%",
          flex: 2,
          zIndex: 100,
          minHeight: 40,
          display: "flex",
          alignItems: "center",
        },
      ]}
    >
      <Ionicons name="ios-chevron-up" size={24} color="white" />
      <Text style={styles.text}>Swipe for more info</Text>
    </RNAnimated.View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black,
    opacity: 0.5,
    zIndex: 10,
  },
  container: {
    flex: 1,
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    height: "15%",
    width: "100%",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
  },
  form: {
    flex: 3,
    backgroundColor: Colors.whiteBg,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  swipe: {},
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    zIndex: 100,
  },
});
