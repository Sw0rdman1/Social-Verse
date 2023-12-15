import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../../assets/constants/Colors";
const { gradient1, gradient2 } = Colors;

interface GradientBackgroundProps {
  children: React.ReactNode;
  centerItems?: boolean;
  inverted?: boolean;
}

const GradientBackground = ({
  children,
  centerItems,
  inverted,
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: centerItems ? "center" : "flex-start",
        alignItems: centerItems ? "center" : "flex-start",
      }}
      colors={inverted ? [gradient2, gradient1] : [gradient1, gradient2]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
