import {
  Animated as RNAnimated,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { User } from "../../models/User";
import Colors from "../../../assets/constants/Colors";
import BackButton from "../ui/BackButton";
import { Post } from "../../models/Post";
import UserInfo from "./UserInfo";

const { height } = Dimensions.get("window");

const Header_Max_Height = 550;
const Header_Min_Height = 350;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 20;

interface DynamicHeaderProps {
  value: RNAnimated.Value;
  user: User;
  goBackHandler: () => void;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({
  value,
  user,
  goBackHandler,
}) => {

  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedArrowOpacity = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0.8, 1],
    extrapolate: "clamp",
  });

  const animatedImageOpacity = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0.5, 1],
    extrapolate: "clamp",
  });

  const animatedBackButtonTop = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [65, 55],
    extrapolate: "clamp",
  });

  return (
    <RNAnimated.View
      style={[
        {
          height: animatedHeaderHeight,
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <RNAnimated.View
          style={[
            styles.backButon,
            { top: animatedBackButtonTop, opacity: animatedArrowOpacity },
          ]}
        >
          <BackButton inverted size={26} handleBackButton={goBackHandler} />
        </RNAnimated.View>
        <RNAnimated.View
          style={{
            flex: 1,
            backgroundColor: Colors.blackTransparent,
            opacity: animatedImageOpacity,
            zIndex: 10,
            position: "absolute",
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,
          }}
        />
        <Animated.Image
          sharedTransitionTag={user.id + ".image"}
          source={{
            uri: user.profilePicture as string,
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            borderBottomLeftRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,

          }}
        />
        <UserInfo user={user} />
      </View>
    </RNAnimated.View>
  );
};

interface ScrollViewScreenProps {
  children: React.ReactNode;
  user: User;
  goBackHandler: () => void;
  openPost: (post: Post) => void;
}

const UserImage: React.FC<ScrollViewScreenProps> = ({
  children,
  user,
  goBackHandler,
  openPost,
}) => {
  const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;

  const animatedPaddingTop = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0, Scroll_Distance],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.homeContainer}>
      <DynamicHeader
        value={scrollOffsetY}
        user={user}
        goBackHandler={goBackHandler}
      />

      <ScrollView
        bounces={false}
        style={{
          backgroundColor: Colors.whiteBg,
          paddingTop: 0,
        }}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={RNAnimated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <Animated.View
          style={styles.borderRadius}
          entering={FadeInDown.delay(600).duration(500)}
        >
          <RNAnimated.View
            style={{
              height: animatedPaddingTop,
            }}
          />
          {children}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.whiteBg,

  },
  headerContainer: {
    backgroundColor: Colors.whiteBg,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },

  backButon: {
    position: "absolute",
    left: 5,
    zIndex: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  borderRadius: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});
