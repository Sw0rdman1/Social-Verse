import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../assets/constants/Colors";

const { error, black, gray, whiteBg, primary } = Colors;

interface PasswordInputProps {
  password: {
    value: string;
    error: string;
  };
  setPassword: (password: Partial<{ value: string; error: string }>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    setPassword({ error: "" });
  }, [password.value]);

  return (
    <View style={{ width: "90%" }}>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            marginBottom: 8,
            marginLeft: 8,
            color: password.error ? error : primary,
          }}
        >
          Password
        </Text>

        <View
          style={[
            {
              borderColor: password.error ? error : gray,
            },
            styles.inputField,
          ]}
        >
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={black}
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword({ value: text })}
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
              <Ionicons name="eye-off" size={24} color={black} />
            ) : (
              <Ionicons name="eye" size={24} color={black} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.errorText}>{password.error}</Text>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  errorText: {
    color: error,
    marginLeft: 15,
    paddingTop: 5,
    height: 22,
  },
  inputField: {
    height: 48,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 12,
  },
});
