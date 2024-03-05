import {
  Animated as RNAnimated,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import { useRef } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";
import InboxHeaderContent from "./InboxHeaderContent";

const { height } = Dimensions.get("window");

const Header_Max_Height = 320;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 30;

interface DynamicHeaderProps {
  value: RNAnimated.Value;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ value }) => {

  const height = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });




  return (
    <RNAnimated.View
      style={[{ height }, styles.headerContainer]}
    >
      <InboxHeaderContent unreadMessages={5} />
    </RNAnimated.View>
  );
};

interface ScrollViewScreenProps {
  children: React.ReactNode;
}

const InboxHeader: React.FC<ScrollViewScreenProps> = ({
  children
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
      />

      <ScrollView
        bounces={false}
        style={{
          backgroundColor: Colors.whiteBg,
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
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
          style={{ flex: 1 }}
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

export default InboxHeader;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: "100%"
  },

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
  },



});