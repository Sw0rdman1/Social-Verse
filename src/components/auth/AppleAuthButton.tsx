import { Platform } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useAuth } from "../../hooks/useAuth";

export function AppleAuthButton() {
  const { signInWithApple } = useAuth();

  if (Platform.OS === "ios")
    return (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={35}
        style={{ width: 350, height: 60 }}
        onPress={signInWithApple}
      />
    );
  return <>{/* Implement Android Auth options. */}</>;
}
