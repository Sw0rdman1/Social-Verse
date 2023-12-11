import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { validateEmail } from "../../../utils/validation";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../../assets/constants/Colors";

const { error, black, gray, primary, success } = Colors;

interface EmailInputProps {
  email: {
    value: string;
    error: string;
  };
  setEmail: (
    newEmail: Partial<{ value: string; error: string }>,
    field: string
  ) => void;
}

const NewEmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
  const [showLoader, setShowLoader] = useState(false);

  const getColor = (text: string, border: boolean) => {
    if (!email.error && (text === "" || showLoader))
      return border ? gray : primary;
    return email.error ? error : success;
  };

  useEffect(() => {
    if (email.value === "") {
      setEmail({ error: "" }, "email");
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
    const timer = setTimeout(() => {
      if (!validateEmail(email.value)) {
        setEmail({ error: "Invalid email format!" }, "email");
      } else {
        setEmail({ error: "" }, "email");
      }
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [email.value]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 5,
          marginLeft: 10,
          color: getColor(email.value, false),
        }}
      >
        Email address
      </Text>

      <View
        style={{
          width: "100%",
          height: 46,
          borderColor: getColor(email.value, true),
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
          placeholder="example@mail.com"
          placeholderTextColor={black}
          keyboardType="email-address"
          onChangeText={(text) => setEmail({ value: text }, "email")}
          style={styles.inputField}
        />
        <View style={styles.indicator}>
          {email.value ? (
            showLoader ? (
              <ActivityIndicator
                color={primary}
                animating={showLoader}
                style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
              />
            ) : email.error ? (
              <MaterialIcons name="error" size={24} color={error} />
            ) : (
              <Ionicons name="md-checkmark-circle" size={26} color={success} />
            )
          ) : (
            <></>
          )}
        </View>
      </View>
      <Text style={styles.errorText}>{email.error}</Text>
    </View>
  );
};

export default NewEmailInput;

const styles = StyleSheet.create({
  container: {
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
