import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../../assets/constants/Colors";
const { primary, secondary } = Colors;

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[secondary, primary]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
