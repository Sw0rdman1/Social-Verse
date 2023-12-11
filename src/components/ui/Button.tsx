import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../../assets/constants/Colors";
const { white, primary, gradient1 } = Colors;

const Button = (props: any) => {
  const filledBgColor = props.color || primary;
  const outlinedColor = white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? white : gradient1;
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
        style={{ fontSize: 24, fontWeight: "bold", ...{ color: textColor } }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 54,
    width: 350,
    borderColor: white,
    borderWidth: 2,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    height: 60,
    width: 350,
    borderColor: white,
    borderWidth: 2,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
});
export default Button;
