import { Platform, Text, View, StyleSheet } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useAuth } from "../../hooks/useAuth";
import Animated, { FadeInDown } from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";

export function AppleAuthButton({ signIn }: { signIn: boolean }) {
  const { signInWithApple } = useAuth();

  if (Platform.OS === "ios")
    return (
      <Animated.View
        style={[styles.appleButton, { bottom: signIn ? 90 : 40 }]}
        entering={FadeInDown.delay(200).springify()}
      >
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.text}> or </Text>
          <View style={styles.line} />
        </View>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={
            signIn
              ? AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
              : AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP
          }
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={35}
          style={{ width: 350, height: 60 }}
          onPress={signInWithApple}
        />
      </Animated.View>
    );
  return <>{/* Implement Android Auth options. */}</>;
}

const styles = StyleSheet.create({
  appleButton: {
    position: "absolute",
    left: "5%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.white,
  },
  lineContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  line: {
    marginTop: 5,
    height: 1,
    width: 120,
    backgroundColor: Colors.white,
  },
});
