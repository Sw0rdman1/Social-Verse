import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { validateEmail } from "../../utils/validation";
import Colors from "../../../assets/constants/Colors";

const { error, black, gray, whiteBg, primary } = Colors;

interface EmailInputProps {
  email: {
    value: string;
    error: string;
  };
  setEmail: (newEmail: Partial<{ value: string; error: string }>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (email.value === "") {
      setEmail({ error: "" });
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
    const timer = setTimeout(() => {
      if (!validateEmail(email.value)) {
        setEmail({ error: "Invalid email format!" });
      } else {
        setEmail({ error: "" });
      }
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [email.value]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "600",
          marginBottom: 8,
          marginLeft: 10,
          color: email.error ? error : black,
        }}
      >
        Email address
      </Text>

      <View
        style={{
          width: "100%",
          height: 48,
          backgroundColor: whiteBg,
          borderColor: email.error ? error : gray,
          borderWidth: 1,
          borderRadius: 20,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          paddingLeft: 15,
          paddingRight: 12,
        }}
      >
        <TextInput
          placeholder="example@mail.com"
          placeholderTextColor={black}
          keyboardType="email-address"
          onChangeText={(text) => setEmail({ value: text })}
          style={styles.inputField}
        />
        <View style={styles.indicator}>
          {showLoader ? (
            <ActivityIndicator
              color={primary}
              animating={showLoader}
              style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
            />
          ) : email.error ? (
            <MaterialIcons name="error" size={24} color={error} />
          ) : (
            <></>
          )}
        </View>
      </View>
      <Text style={styles.errorText}>{email.error}</Text>
    </View>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "90%",
  },

  indicator: {
    flex: 1,
  },

  inputField: {
    flex: 10,
    fontSize: 15,
  },
  errorText: {
    color: error,
    marginLeft: 15,
    paddingTop: 3,
    height: 22,
    fontSize: 13,
  },
});
