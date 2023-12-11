import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../../assets/constants/Colors";
const { gradient1, gradient2 } = Colors;

interface GradientBackgroundProps {
  children: React.ReactNode;
  centerItems?: boolean;
}

const GradientBackground = ({
  children,
  centerItems,
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: centerItems ? "center" : "flex-start",
        alignItems: centerItems ? "center" : "flex-start",
      }}
      colors={[gradient1, gradient2]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
