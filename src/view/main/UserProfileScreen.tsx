import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useBottomTab } from "../../context/BottomBarContext";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const UserProfileScreen = ({ route, navigation }: any) => {
  const { user, previousPage } = route.params;

  const { setBottomTabVisible } = useBottomTab();

  const goBackHandler = () => {
    if (previousPage === "Search" || previousPage === "Home") {
      setBottomTabVisible(true);
    }
    navigation.goBack();
  };

  useEffect(() => {
    setBottomTabVisible(false);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={user.id + ".image"}
        source={{
          uri: user.profilePicture as string,
        }}
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: 0,
        }}
      />
      <Animated.Text
        style={{ fontSize: 30, fontWeight: "bold", marginTop: 100 }}
      >
        {user.displayName}
      </Animated.Text>
      <TouchableOpacity onPress={goBackHandler} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
});
