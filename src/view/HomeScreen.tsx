import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
import GradientBackground from "../components/ui/GradientBackground";
import Colors from "../../assets/constants/Colors";
import { useAuth } from "../hooks/useAuth";

const HomeScreen = ({ navigation }: any) => {
  const { loadingData, initialized, user, signOut } = useAuth();
  const signOutHandler = () => {
    signOut();
  };

  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <GradientBackground inverted centerItems>
        <View
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Text
            style={styles.title}
            sharedTransitionTag="home-screen-title"
          >
            SocialVerse
          </Animated.Text>
          <Animated.View
            style={styles.formContainer}
            sharedTransitionTag="home-screen"
          >
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={signOutHandler}>
              <Text>Log out</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </GradientBackground>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    height: 700,
    width: "100%",
    paddingBottom: 30,
    backgroundColor: Colors.whiteBg,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "700",
    position: "absolute",
    top: 60,
    fontSize: 40,
  },
});
