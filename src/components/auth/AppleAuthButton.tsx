import { Platform } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useAuth } from "../../hooks/useAuth";

export function AppleAuthButton({ signIn }: { signIn: boolean }) {
  const { signInWithApple } = useAuth();

  if (Platform.OS === "ios")
    return (
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
    );
  return <>{/* Implement Android Auth options. */}</>;
}
