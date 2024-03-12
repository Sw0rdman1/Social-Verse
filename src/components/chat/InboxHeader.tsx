import {
  Animated as RNAnimated,
  ScrollView,
  StyleSheet,
  View,
  Text,
  RefreshControl,
} from "react-native";
import { useRef, useState } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Header_Max_Height = 100;
const Header_Min_Height = 0;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 35;

interface DynamicHeaderProps {
  value: RNAnimated.Value;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ value }) => {
  const height = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const fontSize = value.interpolate({
    inputRange: [-40, Scroll_Distance],
    outputRange: [38, 16],
    extrapolate: "clamp",
  });


  return (
    <RNAnimated.View style={{ height }}>
      <RNAnimated.View
        style={styles.headerContainer}
      >
        <RNAnimated.Text style={[styles.title, { fontSize }]}>
          Messages
        </RNAnimated.Text>
        <View>
          <Ionicons name="search" size={24} color={Colors.white} />
        </View>
      </RNAnimated.View>
    </RNAnimated.View>
  );
};

interface ScrollViewScreenProps {
  children: React.ReactNode;
}

const InboxHeader: React.FC<ScrollViewScreenProps> = ({ children }) => {
  const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);

  const animatedPaddingTop = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0, Scroll_Distance],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.homeContainer}>

      <ScrollView
        style={{
          paddingTop: 0,
          backgroundColor: Colors.gradient2,
        }}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={RNAnimated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
            tintColor={Colors.whiteBg}
          />
        }
      >
        <Animated.View
          style={[styles.borderRadius, { flex: 1 }]}
          entering={FadeInDown.delay(600).duration(500)}
        >
          <RNAnimated.View
            style={{
              height: animatedPaddingTop,
            }}
          />
          <DynamicHeader value={scrollOffsetY} />

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

  },
  headerContainer: {
    backgroundColor: Colors.gradient2,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: "100%",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  title: {
    marginBottom: 5,
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white,
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
