import * as React from "react";
import {
  FlatList,
  Dimensions,
  Animated as RNAnimated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Colors from "../../../../assets/constants/Colors";
import { Post } from "../../../models/Post";
import Avatar from "../../ui/Avatar";
import { useAuth } from "../../../hooks/useAuth";
import moment from "moment";
import { useAppContext } from "../../../context/AppContext";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("screen");

const OVERFLOW_HEIGHT = 75;
const SPACING = 10;
const ITEM_WIDTH = width * 0.85;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const VISIBLE_ITEMS = 3;

interface OverflowItemsProps {
  data: Post[];
  scrollXAnimated: RNAnimated.Value;
}

const OverflowItems: React.FC<OverflowItemsProps> = ({
  data,
  scrollXAnimated,
}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <RNAnimated.View style={{ transform: [{ translateY }] }}>
        {data.map((item: Post, index: number) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Avatar user={item.author} size={45} />
              <View>
                <Text style={[styles.name]} numberOfLines={1}>
                  {item.author.displayName}
                </Text>
                <Text style={[styles.email]}>{item.author.email}</Text>
              </View>
            </View>
          );
        })}
      </RNAnimated.View>
    </View>
  );
};

const PostsList = ({ navigation }: any) => {
  const { initialPosts } = useAppContext();

  const scrollXIndex = React.useRef(new RNAnimated.Value(0)).current;
  const scrollXAnimated = React.useRef(new RNAnimated.Value(0)).current;
  const [index, setIndex] = React.useState(0);

  const setActiveIndex = (activeIndex: number) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  };

  React.useEffect(() => {
    if (index === initialPosts.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...initialPosts, ...initialPosts];
    }
  }, [index, initialPosts]);

  React.useEffect(() => {
    RNAnimated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === initialPosts.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <View style={styles.container}>
          <OverflowItems data={initialPosts} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={initialPosts}
            keyExtractor={(post: Post) => post.id.toString()}
            horizontal
            inverted
            initialNumToRender={5}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              padding: SPACING * 2,
              marginTop: 10,
              backgroundColor: Colors.whiteBg,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: initialPosts.length - index }];
              return (
                <View style={newStyle} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item: post, index: i }) => {
              const inputRange = [i - 1, i, i + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <RNAnimated.View
                  style={{
                    position: "absolute",
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      if (initialPosts[index].createdAt instanceof Date) {
                        const date = moment(initialPosts[index].createdAt).fromNow();
                      }
                      navigation.navigate("Post", {
                        post: initialPosts[index],
                        previousPage: "Home",
                      });
                      console.log("Post clicked" + post.id);

                    }}
                  >
                    <Animated.View
                      sharedTransitionTag={post.id + ".image"}
                    >
                      <Image
                        source={{ uri: post.imageUrl }}
                        style={{
                          width: ITEM_WIDTH,
                          height: ITEM_HEIGHT,
                          borderRadius: 14,
                        }}
                      />
                    </Animated.View>
                  </TouchableOpacity>
                </RNAnimated.View>
              );
            }}
          />
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 45,
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  email: {
    fontSize: 13,
    fontWeight: "500",
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
    flexDirection: "row",
    gap: 10,
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    opacity: 0,
    position: "absolute",
  },
});
