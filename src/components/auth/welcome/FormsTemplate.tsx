import React from "react";
import Animated from "react-native-reanimated";

const FormsTemplate = () => {
  return (
    <Animated.View
      sharedTransitionTag="form"
      style={{
        position: "absolute",
        top: -1050,
        height: 1000,
        width: "100%",
        paddingHorizontal: 22,
        backgroundColor: "white",
        borderRadius: 50,
      }}
    />
  );
};

export default FormsTemplate;
