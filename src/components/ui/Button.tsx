import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../../assets/constants/Colors";
const { white, middleColor, primary } = Colors;

const Button = (props: any) => {
  const filledBgColor = props.color || middleColor;
  const outlinedColor = white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? white : primary;
  const buttonStyle = props.disabled ? styles.disabledButton : styles.button;

  return (
    <TouchableOpacity
      style={{
        ...buttonStyle,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      disabled={props.disabled}
      onPress={props.disabled ? null : props.onPress}
    >
      <Text
        style={{ fontSize: 20, fontWeight: "bold", ...{ color: textColor } }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderColor: white,
    borderWidth: 2,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    paddingVertical: 14,
    borderColor: white,
    borderWidth: 2,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
});
export default Button;
