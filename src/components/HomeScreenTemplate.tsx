import Animated from "react-native-reanimated";

const HomeScreenTemplate = () => {
  return (
    <Animated.View
      sharedTransitionTag="home-screen"
      style={{
        position: "absolute",
        bottom: -1050,
        height: 1000,
        width: "100%",
        paddingHorizontal: 22,
        backgroundColor: "white",
        borderRadius: 50,
      }}
    />
  );
};

export default HomeScreenTemplate;
