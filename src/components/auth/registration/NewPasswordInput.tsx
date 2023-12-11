import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { validatePassword } from "../../../utils/validation";
import Colors from "../../../../assets/constants/Colors";

const { error, black, gray, whiteBg, primary, success } = Colors;

interface PasswordInputProps {
  password: {
    value: string;
    error: string;
  };
  setPassword: (
    password: Partial<{ value: string; error: string }>,
    field: string
  ) => void;
}

const NewPasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const getColor = (text: string, border: boolean) => {
    if (!password.error && (text === "" || showLoader))
      return border ? gray : primary;
    return password.error ? error : success;
  };

  useEffect(() => {
    if (password.value === "") {
      setPassword({ error: "" }, "password");
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
    const timer = setTimeout(() => {
      const message = validatePassword(password.value);
      setPassword({ error: message }, "password");
      setShowLoader(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [password.value]);

  return (
    <View style={{ width: "90%" }}>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 5,
            marginLeft: 10,
            color: getColor(password.value, false),
          }}
        >
          Password
        </Text>

        <View
          style={{
            width: "100%",
            height: 46,
            borderColor: getColor(password.value, true),
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={black}
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword({ value: text }, "password")}
            style={{
              width: "100%",
            }}
          />

          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{
              position: "absolute",
              right: 12,
            }}
          >
            {isPasswordVisible ? (
              <Ionicons
                name="eye-off"
                size={24}
                color={password.error ? error : black}
              />
            ) : (
              <Ionicons
                name="eye"
                size={24}
                color={password.error ? error : black}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>{password.error}</Text>
      </View>
    </View>
  );
};

export default NewPasswordInput;

const styles = StyleSheet.create({
  errorText: {
    color: error,
    marginLeft: 15,
    paddingTop: 3,
    height: 22,
    fontSize: 13,
  },
});
