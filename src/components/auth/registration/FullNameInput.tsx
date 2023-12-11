import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../../assets/constants/Colors";

const { error, black, gray, whiteBg, primary, success } = Colors;

interface FullNameInputProps {
  displayName: {
    value: string;
    error: string;
  };
  setDisplayName: (
    newDisplayName: Partial<{ value: string; error: string }>,
    field: string
  ) => void;
}

const FullNameInput: React.FC<FullNameInputProps> = ({
  displayName,
  setDisplayName,
}) => {
  const [showLoader, setShowLoader] = useState(false);

  const getColor = (text: string, border: boolean) => {
    if (!displayName.error && (text === "" || showLoader))
      return border ? gray : primary;
    return displayName.error ? error : success;
  };

  useEffect(() => {
    if (displayName.value === "") {
      displayName.error === "";
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
    const timer = setTimeout(() => {
      if (displayName.value.length < 2) {
        displayName.error = "Name too short!";
      } else {
        displayName.error = "";
      }
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [displayName.value]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 5,
          marginLeft: 10,
          color: getColor(displayName.value, false),
        }}
      >
        Your Name
      </Text>

      <View
        style={{
          width: "100%",
          height: 46,
          borderColor: getColor(displayName.value, true),
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
          placeholder="Enter Your Full Name"
          placeholderTextColor={black}
          keyboardType="default"
          onChangeText={(text) =>
            setDisplayName({ value: text }, "displayName")
          }
          style={styles.inputField}
        />
        <View style={styles.indicator}>
          {displayName.value ? (
            showLoader ? (
              <ActivityIndicator
                color={primary}
                animating={showLoader}
                style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
              />
            ) : displayName.error ? (
              <MaterialIcons name="error" size={24} color={error} />
            ) : (
              <Ionicons name="md-checkmark-circle" size={26} color={success} />
            )
          ) : (
            <></>
          )}
        </View>
      </View>
      <Text style={styles.errorText}>{displayName.error}</Text>
    </View>
  );
};

export default FullNameInput;

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
    marginBottom: 5,
  },
});
