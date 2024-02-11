import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Animated from "react-native-reanimated";
import GradientBackground from "../../components/ui/GradientBackground";
import WelcomeScreenImages from "../../components/auth/welcome/WelcomeScreenImages";
import WelcomeScreenTitle from "../../components/auth/welcome/WelcomeScreenTitle";
import WelcomeScreenButtons from "../../components/auth/welcome/WelcomeScreenButtons";
import FormsTemplate from "../../components/auth/welcome/FormsTemplate";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <Animated.View style={{ flex: 1 }} sharedTransitionTag="container">
      <GradientBackground>
        <View style={{ flex: 1, marginVertical: 50 }}>
          <WelcomeScreenImages />
          <WelcomeScreenTitle />
          <WelcomeScreenButtons navigation={navigation} />
          <FormsTemplate />
        </View>
      </GradientBackground>
    </Animated.View>
  );
};


export default WelcomeScreen;
