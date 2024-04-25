import {
  Animated as RNAnimated,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { useRef } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { User } from "../../models/User";
import BackButton from "../ui/BackButton";
import UserInfo from "./UserInfo";
import { useTheme } from "../../context/ThemeContext";

const { height } = Dimensions.get("window");

const Header_Max_Height = height - 320;
const Header_Min_Height = Header_Max_Height * 0.5;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 30;

interface DynamicHeaderProps {
  value: RNAnimated.Value;
  user: User;
  goBackHandler: () => void;
  isFollowing: boolean;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ value, user, goBackHandler, isFollowing }) => {

  const { theme } = useTheme();

  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedArrowOpacity = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0.7, 1],
    extrapolate: "clamp",
  });

  const animatedImageOpacity = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0.6, 1],
    extrapolate: "clamp",
  });

  const animatedBackButtonTop = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [65, 55],
    extrapolate: "clamp",
  });

  return (
    <RNAnimated.View style={{ height: animatedHeaderHeight }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          height: "100%",
          backgroundColor: theme.grayVariant.light
        }}
      >
        <RNAnimated.View
          style={[styles.backButon, { top: animatedBackButtonTop, opacity: animatedArrowOpacity }]}
        >
          <BackButton inverted size={26} handleBackButton={goBackHandler} />
        </RNAnimated.View>


        <Animated.View
          entering={FadeInUp.delay(300).duration(500)}
          style={[styles.image, styles.borderRadius]}
        >
          <RNAnimated.View
            style={[styles.image, styles.borderRadius, { opacity: animatedImageOpacity, backgroundColor: theme.blackTransparent }]}
          />
        </Animated.View>
        <Animated.Image
          sharedTransitionTag={user.id + ".user.image"}
          source={{
            uri: user.profilePicture as string,
          }}
          blurRadius={isFollowing ? 1 : 5}
          style={[styles.image, styles.borderRadius, { zIndex: 0 }]}
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
  isFollowing: boolean;
}

const UserImage: React.FC<ScrollViewScreenProps> = ({ children, user, goBackHandler, isFollowing }) => {
  const { theme } = useTheme();
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
        isFollowing={isFollowing}
      />

      <ScrollView
        bounces={false}
        style={{ backgroundColor: theme.backgroundColorPrimary }}
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
          entering={FadeInDown.delay(600).duration(500)}
        >
          <RNAnimated.View style={{ height: animatedPaddingTop }} />
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
  },
  backButon: {
    position: "absolute",
    left: 5,
    zIndex: 20,
  },
  borderRadius: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  image: {
    flex: 1,
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

});
